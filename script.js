const col_el = document.querySelectorAll(".col");

window.addEventListener("load", (event) => {
    col_el.forEach(el => {
        el.style.animation = "blinker 5s ease-in-out 2";
    })
})