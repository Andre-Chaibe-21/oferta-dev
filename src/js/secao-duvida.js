let slideAtual = 0;
const slides = document.querySelectorAll('.duvidas');
const setaAvancar = document.querySelector('.seta:not(.seta-inversa)');
const setaVoltar = document.querySelector('.seta.seta-inversa');

setaAvancar.addEventListener('click', function avancarSlide() {

    if (slideAtual == slides.length - 1) {
        return;
    }
    
    if(slideAtual == 0) {
        setaVoltar.classList.remove("opacidade")
    } 

    if (slideAtual == 2) {
        setaAvancar.classList.add("opacidade")
    } 

    slides[slideAtual].classList.remove('mostrar');
    slides[slideAtual].classList.add('nao-mostrar');

    slideAtual++

    slides[slideAtual].classList.toggle('nao-mostrar');

});

setaVoltar.addEventListener('click', function voltarSlide() {

    if (slideAtual == 0) {
        return;
    } else if(slideAtual <= 3) {
        setaAvancar.classList.remove("opacidade")
    }
    
    if(slideAtual == 1)  {
        setaVoltar.classList.add("opacidade")
    }

    slides[slideAtual].classList.remove('mostrar');
    slides[slideAtual].classList.add('nao-mostrar');

    slideAtual--

    slides[slideAtual].classList.toggle('nao-mostrar');

});