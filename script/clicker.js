let clicker = document.getElementById("clicker-button");
let counter = document.getElementById("counter");
let cheer = document.getElementById("cheer");
let emojiPrint = document.getElementById("print-emoji");
clicker.addEventListener("click", count);
let times = 0;

function count() {
    times++;
    counter.innerHTML = times;
    cheer.innerHTML = "Jatka klikkailua!";

    if (times == 69) {
        counter.innerHTML = times;
        counter.classList.add("red-counter");
    }
    if (times % 10 === 0) {
        fetch("https://emojihub.herokuapp.com/api/random/group_face_positive")
            .then((response) => response.json())
            .then((data) => (emojiPrint.innerHTML = data.htmlCode));
    }
}

counter.addEventListener("mouseenter", changeColor);
counter.addEventListener("mouseleave", changeColor);

function changeColor() {
    counter.classList.toggle("red-counter");
}