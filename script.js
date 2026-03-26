// USOU O INSPECIONAR NÉ
let botaoMensagem = document.getElementById("btnMensagem");
let botaoCor = document.getElementById("btnCor");
let mensagem = document.getElementById("mensagem");
let card = document.querySelector(".apresentacao");


botaoMensagem.addEventListener("click", function () {

    mensagem.innerText = "Mensagem secreta misteriosa";
});


let corAtual = 0;


botaoCor.addEventListener("click", function () {

   
    if (corAtual == 0) {

     card.style.backgroundColor = "#1faf21";
        corAtual = 1;

    } else {

        
        card.style.backgroundColor = "white";

        
        corAtual = 0;
    }
});