var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");
var themeSwitchInput = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

fans.addEventListener("mouseover", function () {
    fans.innerText = "123K";
});

fish.addEventListener("mouseover", functio n() {
    fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
    pets.innerText = "20K";
});

var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

themeSwitchInput.addEventListener("click", function () {
    if (toggle.classList.contains("light")) {
        toggle.classList.remove("light");
        ball.classList.remove("move-right");
        h1.innerText = "Stealthy Quincy";
    } else {
        toggle.classList.add("light");
        ball.classList.add("move-right");
        h1.innerText = "Party Quincy";
    }
});

