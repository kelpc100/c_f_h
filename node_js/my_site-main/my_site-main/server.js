const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");
const exp = require("constants");
const connection = require("/mnt/c/Users/kelp/Desktop/learning/coding_for_hackers/node_js/my_site-main/my_site-main/db.js")
const net = require("net")
const validator = require("validator")
 
const app = express();
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
const PORT = 3000;

app.unsubscribe(express.static(path.join(__dirname,'static')));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/views/sql.html", (req, res) => {
    res.sendFile(__dirname + "/views/sql.html");
});

app.post('/api', function(req, res){
    console.log(req.body)
    const username = req.body.user
    const password = req.body.password
    connection.query("INSERT INTO sql_injection (user, password) VALUES (?,?)",
    [username,password],
    (err, result) => {
        console.log(err);
    }
    )})

app.post("/login", function(req, res){
    const username1 = req.body.user1
    const password1 = req.body.password1
    connection.query("SELECT * FROM sql_injection WHERE user = '" + req.body.user1 + "' AND password = '" + req.body.password1 + "'",
    [username1, password1],
      (err, result) => {
        if (err){
          res.send({err: err});
        }
    
          if (result.length > 0) {
            res.send({Message: "Loged in"})
          } else {
            res.send({Message: "Wrong username/password"})
          }
      }
    ); 
    }) 
 
app.listen(PORT, function(){
    console.log("server is working")
    connection.connect(function(err){
        if(err) throw err;
        console.log("database is working")
    })
})

app.get("/views/ssrf.html", (req, res) => {
  res.sendFile(__dirname + "/views/ssrf.html");
});

/*
app.post('/data', (req,res) => {
  const { url } = req.body;
  console.log("URL requested ", url);
  const responseData = {
    status: 'success',
    url: url,
    data: 'here is what was fetched from the url'
  };
  res.json(responseData)
});
*/


function checkPortOpen(host, port, timeout = 3000){
    return new Promise((resolve, reject) => {
      const socket = new net.Socket();

      const onError = () =>{
          socket.destroy();
          reject('connection error')
      };

      socket.setTimeout(timeout);
      socket.once('timeout', () =>{
          socket.end();
          reject('Timeout')
      });

      socket.once('error', onError);
      socket.once('connect', () =>{
          socket.end();
          resolve('Port is open')
      });

      socket.connect(port, host);
    });
}

app.post('/data', async (req, res) => {
  const { url } = req.body;

  if(!url || !validator.isURL(url, { require_protocol: true})) {
    return res.status(400).json({error: 'Bad Request or URL!'});
  }
  try {
    const urlObject = new URL(url);
    const host = urlObject.hostname;
    const port = urlObject.port || (urlObject.protocol === 'https:' ? 443 : 80);
    const result = await checkPortOpen(host, port);

    res.json({message: result});
  } catch (error) {
    res.status(500).json({error: error.toSing()});
  }
});
