// document.querySelector("form").onsubmit = function(event) {
//     event.preventDefault();
//     let name = document.querySelector("#name").value;
//     console.log("Hi " + name);
// }
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").onsubmit = function() {
        let name = document.querySelector("#name").value;
        document.querySelector("h1").innerHTML = "Hi " + name;
        let time = new Date();
        let hour = time.getHours();
        if (hour < 12) {
            document.querySelector("#h2").innerHTML = "Good morning!";
        } else if (hour < 18) {
            document.querySelector("#h2").innerHTML = "Good afternoon!";
        } else {
            document.querySelector("#h2").innerHTML = "Good evening!";
        }
        let day = time.getDay();
        console.log(day);
        if (day == 0) {
            document.querySelector("#h22").innerHTML = "Today is Sunday";
        } else if (day == 1) {
            document.querySelector("#h22").innerHTML = "Today is Monday";
        } else if (day == 2) {
            document.querySelector("#h22").innerHTML = "Today is Tuesday";
        } else if (day == 3) {
            document.querySelector("#h22").innerHTML = "Today is Wednesday";
        } else if (day == 4) {
            document.querySelector("#h22").innerHTML = "Today is Thursday";
        } else if (day == 5) {
            document.querySelector("#h22").innerHTML = "Today is Friday";
        } else if (day == 6) {
            document.querySelector("#h22").innerHTML = "Today is Saturday";
        }

        if (day == 0 || day == 6) {
            document.querySelector("#h23").innerHTML = "Just Enjoy The Weekend Bro";
        } else if (day == 5) {
            document.querySelector("#h23").innerHTML = "Finally Fridaaaaay, let's go";
        } else {
            document.querySelector("#h23").innerHTML = "Not Friday, Yet :(";
        }
        let color = document.querySelector("#div3");
        color.style.backgroundColor = "#598EFF";
        // ||
        // array
        return false;
    }
})
