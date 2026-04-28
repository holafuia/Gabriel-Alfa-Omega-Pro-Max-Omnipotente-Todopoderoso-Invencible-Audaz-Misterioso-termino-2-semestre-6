function random() {
    let number = Math.random();
    console.log(number);
    if (number >= 0.5) {
        let head = document.querySelector("#span");
        span.innerHTML = "Heads";
        let image = document.querySelector("#headtail");
        image.style.backgroundImage = "url('https://static.wikia.nocookie.net/the-fireball760/images/f/fb/Normal.png/revision/latest?cb=20250301063441')";
    } else if (number < 0.5) {
        let tail = document.querySelector("#span");
        span.innerHTML = "Tails";
        let image = document.querySelector("#headtail");
        image.style.backgroundImage = "url('https://static.wikia.nocookie.net/the-fireball760/images/7/7a/Easy.png/revision/latest/thumbnail?cb=20250301063416')";
    }
}
