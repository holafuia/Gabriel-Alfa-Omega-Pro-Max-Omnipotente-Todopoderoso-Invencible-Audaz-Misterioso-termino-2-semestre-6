let number = 0;
function thingie() {
    number++;
    let num = document.querySelector('#span');
    span.innerHTML = `${number}`;
    if (number == 100) {
        let num = document.querySelector('#span');
        span.innerHTML = "0";
        alert("CONGRATS");
        number = 0;
    }
}

