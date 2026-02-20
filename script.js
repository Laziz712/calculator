const display = document.getElementById("natija");
const raqamlar = document.querySelectorAll(".raqam");
const operatorlar = document.querySelectorAll(".operator");
const teng = document.querySelector(".teng");
const clear = document.querySelector(".c");
const nuqta = document.querySelector(".nuqta");

raqamlar.forEach(btn => {
    btn.addEventListener("click", () => {
        display.value += btn.textContent;
    });
});

operatorlar.forEach(btn => {
    btn.addEventListener("click", () => {
        display.value += btn.textContent;
    });
});

nuqta.addEventListener("click", () => {
    display.value += ".";
});

clear.addEventListener("click", () => {
    display.value = "";
});

teng.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "ERROR";
    }
});