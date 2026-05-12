let counter;
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#button1").onclick = function(){
        counter = 60;
    }
    document.querySelector("#button2").onclick = function(){
        counter = 300;
    }
    document.querySelector("#button3").onclick = function (){
        counter = 600;
    }

    let count = function() {
        counter--;
        document.querySelector("h1").innerHTML = counter;
    }

    document.querySelector("#start").onclick = function(){
    setInterval(count, 1000);
    document.querySelector("#start").disabled = true;
    }

    const alarm = new Audio 
    if (counter == 0) {

    }
})

// function count() {
//     counter++;
//     document.querySelector('h1').innerHTML = counter;
// }

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector("#start").onclick = function(){
//     setInterval(count, 1000);
//     document.querySelector("#start").disabled = true;
//     };
// });
