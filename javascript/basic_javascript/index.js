console.log("Hello World");
console.log("I dont get it");
console.log(`backward qoute`);


var name = "Name";
console.log(name);
//window.alert(`This is an alert`);


//comments are 
/* multi line comment
*/


var num = 5 + 6;
console.log(num);


//alert(`alert pop up`);


console.log(typeof(num));


//var x = 3;
//var y = 4;
//var sum = x + y;
//console.log(sum);


//prompt("what is your name")
//prom_name = prompt("what is your name");
//console.log(prom_name);
//alert("Hello " + prom_name);


let x = 20;
let y = 5;
// Addition
x += y;  // x becomes 25
let z = x + y;
console.log(x);
console.log(z);

// Subtraction
x -= 3;  // x becomes 22
z = x - y;
console.log(x);
console.log(z);

// Multiplication
x *= 2;  // x becomes 44
z = x * y;
console.log(x);
console.log(z);

// Division
x /= 4;  // x becomes 11
z = x / y; 
console.log(x);
console.log(z);

// Modulo (remainder)
x %= 3;  // x becomes 2
z = x % y;
console.log(x);
console.log(z);


var username = "UserName";
var namelength = username.length;
console.log(namelength);


var sliceex = "slice";
var swoosh = sliceex.slice(2,4);
console.log(swoosh);
console.log(sliceex.slice(0,sliceex.length));


var mixed = "bOnK";
console.log(mixed);
console.log(mixed.toUpperCase());
console.log(mixed.toLowerCase());
console.log(mixed + mixed);


function dogAge(age){
    let dog_age =  age * 7;
    return dog_age

}
console.log(dogAge(2));


let numb = 4.8;
console.log(Math.round(numb));


let t = 1.5**2;
function bmi(w,h){
    bmi_val = w / (h ** 2)
    return bmi_val
}
console.log(bmi(50,1.5));


const u = 4;
const v = 3;

let bool =  (u > 2 && v < 4);
console.log(bool);

bool =  (u > 2 || v < 4);
console.log(bool);

bool =  (u > 2 != v < 4);
console.log(bool);

bool =  (u > 2 == v < 4);
console.log(bool);

bool =  (u >= v);
console.log(bool);

bool =  (u === v);
console.log(bool);

bool =  (u != v);
console.log(bool);

if(u > 2){
    console.log(`u greater than 2`)
} else if(v < 4){
    console.log(`v less than 4`)
}else{
    console.log('womp womp')
}


let grade = "92.3";
grade = parseFloat(grade);
console.log(grade);


var names = ["ALice", "Bob", "Charlie", "Dan"];
console.log(names[0]);
console.log(names[3]);
console.log(names[Math.floor(Math.random() * names.length)]);


let lives = 3;
while(lives > 0){
    console.log(lives)
    lives --;
}


console.log(10 % 5);
console.log(10 % 4);

function fizzBuzz(nu){
    if((nu % 3 === 0) && (nu % 5 === 0)){
        return "FizzBuzz"
    }else if(nu % 3 === 0){
        return "Fizz"
    }else if(nu % 5 === 0){
        return "Buzz"
    } else{
        return nu
    }
}

fizzBuzz(6);
fizzBuzz(10);
fizzBuzz(30);
fizzBuzz(7);

let i = 50;
let results = [];
while(i >= 0){
    console.log(fizzBuzz(i))
    results.push(fizzBuzz(i))
    i --
}
console.log(results)

const number = 10;
const string = "10";
console.log(number == string)
console.log(number === string)


console.log(Math.random())