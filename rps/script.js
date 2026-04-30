function random() {
    const number = Math.random();
    return number;
}
function funcionality(number) {
    if (number <= 0.33) {
        let image = document.querySelector("#xd");
        image.innerHTML = "ROCK";
    } else if (number <= 0.67) {
        let image = document.querySelector("#xd");
        image.innerHTML = "PAPER";
    } else if (number > 0.67) {
        let image = document.querySelector("#xd");
        image.innerHTML = "SCISSORS";
    }
}
function rock() {
    const number = random();
    funcionality(number);
    console.log(number);
    if (number <= 0.33) {
        let tie = document.querySelector("#spans");
        tie.innerHTML = "TIE";
    } else if (number <= 0.67) {
        let incorrect = document.querySelector("#spans");
        incorrect.innerHTML = "You Lose";
    } else if (number > 0.67) {
        let correct = document.querySelector("#spans");
        correct.innerHTML = "You win";
    }
}
function paper() {
    const number = random();
    console.log(number);
    if (number <= 0.33) {
        let correct = document.querySelector("#spans");
        correct.innerHTML = "You win";
    } else if (number <= 0.67) {
        let tie = document.querySelector("#spans");
        tie.innerHTML = "TIE";
    } else if (number > 0.67) {
        let incorrect = document.querySelector("#spans");
        incorrect.innerHTML = "You Lose";
    }
}
function scissors() {
    const number = random();
    console.log(number);
    if (number <= 0.33) {
        let incorrect = document.querySelector("#spans");
        incorrect.innerHTML = "You Lose";
    } else if (number <= 0.67) {
        let correct = document.querySelector("#spans");
        correct.innerHTML = "You Win";
    } else if (number > 0.67) {
        let tie = document.querySelector("#spans");
        tie.innerHTML = "TIE";
    }
}
