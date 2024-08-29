// alert('test alert');

// document.querySelector('h1').innerHTML = 'welcome'

var h1E = document.querySelector("h1");
h1E.addEventListener("click", function() {
    this.innerHTML = "welcome"
});

