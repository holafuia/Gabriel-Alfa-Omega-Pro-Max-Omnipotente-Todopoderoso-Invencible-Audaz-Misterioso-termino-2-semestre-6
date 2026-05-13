let counter;
const alarm = new Audio("sound/alarm.mp3");
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#button1").onclick = function(){
        counter = 60;
        document.querySelector("h1").innerHTML = 60;
    }
    document.querySelector("#button2").onclick = function(){
        counter = 300;
        document.querySelector("h1").innerHTML = 300;
    }
    document.querySelector("#button3").onclick = function (){
        counter = 600;
        document.querySelector("h1").innerHTML = 600;
    }

    let count = function() {
        if (counter != 0) {
            counter--;
            document.querySelector("h1").innerHTML = counter;
        } else if (counter == 0) {
            document.querySelector("h1").innerHTML = 0;
            alarm.currentTime = 0;
            alarm.play();
        }
    }

    document.querySelector("#start").onclick = function(){
    setInterval(count, 1000);
    document.querySelector("#start").disabled = true;
    }
})
