// document.querySelector("form").onsubmit = function(event) {
//     event.preventDefault();
//     let name = document.querySelector("#name").value;
//     console.log("Hi " + name);
// }
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").onsubmit = function() {
        let name = document.querySelector("#name).value;
            console.log("Hi " + name);
            return false;
    }
})
