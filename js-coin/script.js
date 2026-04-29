function random() {
    let number = Math.random();
    console.log(number);
    if (number >= 0.5) {
        let head = document.querySelector("#span");
        span.innerHTML = "Heads";
        let image = document.querySelector("#headtail");
        image.style.backgroundImage = "url('https://assets1.ignimgs.com/2018/06/21/hollowknight-1280-1529623462572_160w.jpg?width=1280&format=jpg&auto=webp&quality=80')";
    } else if (number < 0.5) {
        let tail = document.querySelector("#span");
        span.innerHTML = "Tails";
        let image = document.querySelector("#headtail");
        image.style.backgroundImage = "url('https://media.vandal.net/i/1200x1200/8-2025/26/202582613201212_1.jpg')";
    }
}
