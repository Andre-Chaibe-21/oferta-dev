const carrosel = document.getElementById("carrosel")
const setas = document.querySelectorAll(".seta");
const duvida = document.getElementById("duvida");
const resposta = document.getElementById("resposta")
let slideAtual = 0;

setas[0].addEventListener("click", voltarCarrosel);
setas[1].addEventListener("click", avancaCarrosel);

function avancaCarrosel() {
    slideAtual++

        if (slideAtual == 1) {
            carrosel.style.background = slide2.corSlide;
            duvida.innerHTML = slide2.pergunta;
            resposta.innerHTML = slide2.resposta;
            setas[0].classList.remove("opacidade", "desativa-clique")
        };

        if (slideAtual == 2) {
            carrosel.style.background = slide3.corSlide;
            duvida.innerHTML = slide3.pergunta;
            resposta.innerHTML = slide3.resposta;
        };

        if (slideAtual == 3) {
            carrosel.style.background = slide4.corSlide;
            duvida.innerHTML = slide4.pergunta;
            resposta.innerHTML = slide4.resposta;
            setas[1].classList.add("opacidade","desativa-clique");
        };

};


function voltarCarrosel() {
    

    if (slideAtual == 1) {
        carrosel.style.background = slide1.corSlide;
        duvida.textContent = slide1.pergunta;
        resposta.innerHTML = slide1.resposta;
        setas[0].classList.add("opacidade", "desativa-clique")
    };

    if (slideAtual == 2) {
        carrosel.style.background = slide2.corSlide;
        duvida.innerHTML = slide2.pergunta;
        resposta.innerHTML = slide2.resposta;
    };

    if (slideAtual == 3) {
        carrosel.style.background = slide3.corSlide;
        duvida.innerHTML = slide3.pergunta;
        resposta.innerHTML = slide3.resposta;
        setas[1].classList.remove("opacidade","desativa-clique");
    };

    slideAtual--
 
};

const slide1 = {
    pergunta: "Qual a diferença entre um programador web e um designer?",
    resposta: "<p id='resposta'><span>R:</span> O designer cuida da aparência visual do site na forma estática, enquanto o programador web transforma esse design em algo dinâmico e funcional, lidando com códigos, funcionalidades e integrações.</p>",
    corSlide: "linear-gradient(rgba(182, 26, 182, 0.9), rgba(177, 32, 112, 0.9), rgba(170, 25, 110, 0.9)), url('./src/images/background-código.jpg') center"
}

const slide2 = {
    pergunta: "<h2 id='duvida'>Quanto custa desenvolver um site ou aplicativo?</h2>",
    resposta: "<p id='resposta'><span>R:</span> O custo varia conforme a complexidade do projeto, tecnologias usadas e tempo de desenvolvimento.</p>",
    corSlide: "linear-gradient(rgba(15, 145, 45, 0.9), rgba(17, 99, 28, 0.9)), url('./src/images/background-dinheiro.jpg') center"
}

const slide3 = {
    pergunta: "<h2 id='duvida'>Qual é o nível de suporte que você oferece após a entrega do projeto?</h2>",
    resposta: "<p id='resposta'><span>R:</span> Ofereço suporte por um período de 15 dias para esclarecer dúvidas ou resolver qualquer problema que surgir. Após esse prazo, eventuais alterações poderão estar sujeitas a cobrança adicional.</p>",
    corSlide: "linear-gradient(rgba(24, 30, 199, 0.9), rgba(8, 45, 226, 0.9)), url('./src/images/background-suporte.jpg.jpg') center"
}

const slide4 = {
    pergunta: "<h2 id='duvida'>Posso acompanhar o desenvolvimento do meu projeto?</h2>",
    resposta: "<p id='resposta'><span>R:</span> Sim, você será atualizado regularmente sobre o progresso, e feedback será coletado em cada etapa para garantir que o site atenda às suas expectativas.</p>",
    corSlide: "linear-gradient(rgba(187, 22, 22, 0.9), rgba(212, 15, 15, 0.9)), url('./src/images/background-desenvolvimento.jpg') center"
}