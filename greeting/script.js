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
            document.querySelector("#h2").innerHTML = "Good morning";
        } else if (hour < 18) {
            document.querySelector("#h2").innerHTML = "Good afternoon";
        } else {
            document.querySelector("#h2").innerHTML = "Good evening";
        }
        let day = time.getDay();
        console.log(day);
        // array
        return false;
    }
})
