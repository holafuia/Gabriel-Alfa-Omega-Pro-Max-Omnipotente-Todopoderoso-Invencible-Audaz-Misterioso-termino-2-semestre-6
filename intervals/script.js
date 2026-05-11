document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#1").onclick = function(){
        let counter = 60;
    }
    document.querySelector("#5").onclick = function(){
        let counter = 300;
    }
    document.querySelector("#10").onclick = function (){
        let counter = 600;
    }
})

function count() {
    counter--;
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#start").onclick = function(){
    setInterval(count, 1000);
    document.querySelector("#start").disabled = true;
    };
});
