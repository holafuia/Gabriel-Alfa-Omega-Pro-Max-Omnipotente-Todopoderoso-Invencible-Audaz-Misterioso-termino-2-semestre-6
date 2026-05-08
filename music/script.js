document.addEventListener("DOMContentLoaded", function(){
    const kick = new Audio("sounds/kick.wav");
    const kickDiv = document.querySelector("#kick");

    const snare = new Audio("sounds/snare.wav");
    const snareDiv = document.querySelector("#snare");

    const clap = new Audio("sounds/clap.wav");
    const clapDiv = document.querySelector("#clap");

    const cowbell = new Audio("sounds/cowbell.wav");
    const hihat = new Audio("sounds/hihat.wav");
    const hihatDiv = document.querySelector("#hihat");

    const openhat = new Audio("sounds/openhat.wav");
    const openhatDiv = document.querySelector("#openhat");

    const tom = new Audio("sounds/tom.wav");
    const yuh = new Audio("sounds/yuh.wav");
    window.addEventListener("keydown", function(event){
        if (event.key == "a") {
            kick.currentTime = 0;
            kick.play();
            kickDiv.classList.add("active");
        } else if (event.key == "s") {
            snare.currentTime = 0;
            snare.play();
            snareDiv.classList.add("active");
        } else if (event.key == "d") {
            clap.currentTime = 0;
            clap.play();
            clapDiv.classList.add("active");
        } else if (event.key == "f") {
            cowbell.currentTime = 0;
            cowbell.play();
        } else if (event.key == "q") {
            hihat.currentTime = 0;
            hihat.play();
            hihatDiv.classList.add("active");
        } else if (event.key == "w") {
            openhat.currentTime = 0;
            openhat.play();
            openhatDiv.classList.add("active");
        } else if (event.key == "e") {
            tom.currentTime = 0;
            tom.play();
        }else if (event.key == "r") {
            yuh.currentTime = 0;
            yuh.play();
        }
    })
    window.addEventListener("keyup", function(event) {
        if (event.key == "a") {
            kickDiv.classList.remove("active");
        } else if (event.key == "q") {
            hihatDiv.classList.remove("active");
        } else if (event.key == "w") {
            openhatDiv.classList.remove("active");
        } else if (event.key == "s") {
            snareDiv.classList.remove("active");
        } else if (event.key == "d") {
            clapDiv
        }
    })
})
