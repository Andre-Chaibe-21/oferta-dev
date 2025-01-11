const duvidaUm = document.getElementById("campo-um");
const duvidaDois = document.getElementById("campo-dois");
const duvidaTres = document.getElementById("campo-tres");
const respostas = document.querySelectorAll(".resposta");

duvidaUm.addEventListener("click", () => {
    respostas[0].classList.toggle("nao-mostrar")
    respostas[1].classList.add("nao-mostrar")
    respostas[2].classList.add("nao-mostrar")
});

duvidaDois.addEventListener("click", () => {
    respostas[1].classList.toggle("nao-mostrar");
    respostas[0].classList.add("nao-mostrar")

});

duvidaTres.addEventListener("click", () => {
    respostas[2].classList.toggle("nao-mostrar")
    respostas[0].classList.add("nao-mostrar")
    respostas[1].classList.add("nao-mostrar")
});
