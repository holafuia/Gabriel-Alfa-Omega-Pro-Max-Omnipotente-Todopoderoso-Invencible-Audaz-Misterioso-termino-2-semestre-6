function random() {
    const number = Math.random();
    console.log(number);
    return number;
}
function funcionality(number) {
    if (number >= 0.5) {
        let head = document.querySelector("#span");
        head.innerHTML = "Heads";
        let image = document.querySelector("#headtail");
        image.style.backgroundImage = "url('https://assets1.ignimgs.com/2018/06/21/hollowknight-1280-1529623462572_160w.jpg?width=1280&format=jpg&auto=webp&quality=80')";
        let color = document.querySelector("body");
        color.style.backgroundColor = "#181BC7";
    } else if (number < 0.5) {
        let tail = document.querySelector("#span");
        span.innerHTML = "Tails";
        let image = document.querySelector("#headtail");
        image.style.backgroundImage = "url('https://media.vandal.net/i/1200x1200/8-2025/26/202582613201212_1.jpg')";
        let otherColor = document.querySelector("body");
        otherColor.style.backgroundColor = "#911A1A";
    }
}
function corrected() {
    let correct = document.querySelector("#footer");
    correct.style.backgroundColor = "#14AD00";
}
function incorrected() {
    let incorrect = document.querySelector("#footer");
    incorrect.style.backgroundColor = "#EB0202";
}
function heads() {
    const number = random();
    funcionality(number);
    if (number >= 0.5) {
        let correct = document.querySelector("#spans");
        correct.innerHTML = "CORRECT";
        corrected();
    } else {
        let incorrect = document.querySelector("#spans");
        incorrect.innerHTML = "INCORRECT";
        incorrected();
    }
}
function tails() {
    const number = random();
    funcionality(number);
    if (number < 0.5) {
        let correct = document.querySelector("#spans");
        correct.innerHTML = "CORRECT";
        corrected();
    } else {
        let incorrect = document.querySelector("#spans");
        incorrect.innerHTML = "INCORRECT";
        incorrected();
    }
}
