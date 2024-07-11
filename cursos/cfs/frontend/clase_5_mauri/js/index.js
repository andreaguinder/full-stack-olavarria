"use strict";

let btn = document.getElementById("btn1");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let param1 = document.getElementById("inpText1").value;
    let param2 = document.getElementById("inpText2").value;

    verificarConParametros(param1, param2);
})

function verificarConParametros(param1, param2){
    alert("Hola " + param1 + " " + param2);
}