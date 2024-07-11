"use strict";

const boton1 = document.querySelector("#boton-1");
const rectangulo1 = document.querySelector(".rectangulo-uno");

boton1.addEventListener("click", () => {
    rectangulo1.classList.toggle("hidden");
    rectangulo2.classList.remove("hidden");
});

const boton2 = document.querySelector("#boton-2");
const rectangulo2 = document.querySelector(".rectangulo-dos")

boton2.addEventListener("click", () => {
    rectangulo2.classList.toggle("hidden");
    rectangulo1.classList.remove("hidden");
});