const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () =>{
        desselecionarBotao();
		desselecionarPersonagem();
// adiciona selecionado
        botao.classList.add("selecionado");
		personagens[indice].classList.add("selecionado");
    });
});

//remove selecionado do personagem
function desselecionarPersonagem() {
	const personagemSelecionado = document.querySelector(".personagem.selecionado");
	personagemSelecionado.classList.remove("selecionado");
}

// remove selecionado do botao
function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");

}

