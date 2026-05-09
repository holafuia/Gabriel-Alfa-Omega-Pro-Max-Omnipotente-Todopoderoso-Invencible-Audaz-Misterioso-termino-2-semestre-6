document.addEventListener("DOMContentLoaded", function(){
    const kick = new Audio("sounds/kick.wav");
    const kickDiv = document.querySelector("#kick");

    const snare = new Audio("sounds/snare.wav");
    const snareDiv = document.querySelector("#snare");

    const clap = new Audio("sounds/clap.wav");
    const clapDiv = document.querySelector("#clap");

    const cowbell = new Audio("sounds/cowbell.wav");
    const cowbellDiv = document.querySelector("#cowbell");

    const hihat = new Audio("sounds/hihat.wav");
    const hihatDiv = document.querySelector("#hihat");

    const openhat = new Audio("sounds/openhat.wav");
    const openhatDiv = document.querySelector("#openhat");

    const tom = new Audio("sounds/tom.wav");
    const tomDiv = document.querySelector("#tom");

    const yuh = new Audio("sounds/yuh.wav");
    const yuhDiv = document.querySelector("#yuh");

    const audio1 = new Audio("sounds/audio1.mp3");
    const audio1Div = document.querySelector("#audio1");

    const audio2 = new Audio("sounds/audio2.mp3");
    const audio2Div = document.querySelector("#audio2");

    const audio3 = new Audio("sounds/audio3.mp3");
    const audio3Div = document.querySelector("#audio3");

    const audio4 = new Audio("sounds/audio4.mp3");
    const audio4Div = document.querySelector("#audio4");

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
            cowbellDiv.classList.add("active");
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
            tomDiv.classList.add("active");
        }else if (event.key == "r") {
            yuh.currentTime = 0;
            yuh.play();
            yuhDiv.classList.add("active");
        } else if (event.key == "z") {
            audio1.currentTime = 0;
            audio1.play();
            audio1Div.classList.add("active");
        } else if (event.key == "x") {
            audio2.currentTime = 0;
            audio2.play();
            audio2Div.classList.add("active");
        } else if (event.key == "c") {
            audio3.currentTime = 0;
            audio3.play();
            audio3Div.classList.add("active");
        } else if (event.key == "v") {
            audio4.currentTime = 0;
            audio4.play();
            audio4Div.classList.add("active");
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
            clapDiv.classList.remove("active");
        } else if (event.key == "f") {
            cowbellDiv.classList.remove("active");
        } else if (event.key == "e") {
            tomDiv.classList.remove("active");
        } else if (event.key == "r") {
            yuhDiv.classList.remove("active");
        } else if (event.key == "z") {
            audio1Div.classList.remove("active");
        } else if (event.key == "x") {
            audio2Div.classList.remove("active");
        } else if (event.key == "c") {
            audio3Div.classList.remove("active");
        } else if (event.key == "v") {
            audio4Div.classList.remove("active");
        }
    })
})
