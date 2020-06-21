const valores = ["A", "B", "C", "D", "E", "F", "0", 1, 2, 3, 4, 5, 6, 7, 8, 9];
const body = document.querySelector("body");
const boton = document.querySelector(".boton");
const titulo = document.querySelector("span");

boton.addEventListener("click", cambiarFondo);

function cambiarFondo() {
  let numeroHexadecimal = "#";

  for (let i = 0; i < 6; i++) {
    let numeroRandom = Math.floor(Math.random() * valores.length);
    numeroHexadecimal += valores[numeroRandom];
  }

  body.style.backgroundColor = numeroHexadecimal;
  titulo.innerHTML = numeroHexadecimal;
}
