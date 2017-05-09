
// function atencaoDeUmaAluna(frase,numeroDaAluna){
// 	// i = 0
// 	// frase = "Atenção aluna:"
// 	alert(frase+numeroDaAluna);
// 	// 0 Atenção aluna:
// }

// function chamarAtencaoDasAlunas(){
// 	for (var i = 0; i < 4; i++) {
// 		atencaoDeUmaAluna(i,"Atenção aluna:");
// 	}
// }

// chamarAtencaoDasAlunas();


var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer");
function abrirMenu(){
	// declarar uma variavel, pegar navegacaoPrimaria
	var menu = document.querySelector("#navegacaoPrimaria");
	
	// se estiver com o classname "menuHorizontal visivel" fecha o dropdown
	if(menu.className == "menuHorizontal visivel"){
		// Fechar o menuHorizontal
		menu.className = "menuHorizontal";
	}else{
		// Abrir o menuHorizontal
		// tornar a navegacaoPrimaria Visivel, adicionar a classe visivel
		menu.className = "menuHorizontal visivel";
	}
}
botaoMenuHamburguer.onclick = abrirMenu;

// Botão amei 
// Retorna um Array de Botao
var botoesAmei = document.querySelectorAll(".botao.amei");

function amar(){
	this.className = "botao amei vermelho";
}

for (var i = 0; i < botoesAmei.length; i++) {
	botoesAmei[i].onclick = amar;
}



// SLIDER
function criarUmBullet(numeroDoSlide){
	// Pegando o ul que vai inserir o li
	var bulletUl = document.querySelector(".bullets ul");
	// Criando um novo li
	var li = document.createElement("li");
	// Criando um button para inserir no li
	var button = document.createElement("button");
	button.className="bullet";
	// PARAM1 = Nome da propriedade
	// PARAM2 = Valor da propriedade
	button.setAttribute("data-slide",numeroDoSlide);

	// Inserindo o button no li
	li.appendChild(button);
	// Inserindo o li no ul dos bullets
	bulletUl.appendChild(li);
}

function criarBulletsNoSlider(){
	// pegando todos os slides que estão dentro da #slider
	var slides = document.querySelectorAll("#slider .slide");
	var quantidadeSlides = slides.length;

	// Criar os bullets
	for(var i=0; i < quantidadeSlides; i++){
		// Criar um bullet
		criarUmBullet(i);
	}

}

var slideIndexAtivo = 0;
// Funções para os botoes
// Botao da seta esquerda
function voltarSlide(){

	if(slideIndexAtivo > 0){
		// var proximoSlideIndex = slideIndexAtivo + 1;
		// irParaOSlide(proximoSlideIndex);

		// Qual slide que é o seguinte?
		var anteriorSlideIndex = slideIndexAtivo - 1;
		var anteriorSlideOrdem = anteriorSlideIndex + 1;

		// Desaparecer com o slide que estava ativo
		var slideAtual = document.querySelector("#slider .slide.ativo");
		slideAtual.classList.remove("ativo");

		// Mostrar o slide
		var proximoSlide = document.querySelector("#slider .slide:nth-child("+anteriorSlideOrdem+")");
		proximoSlide.classList.add("ativo");

		// Atualizar o slideIndexAtivo
		slideIndexAtivo = anteriorSlideIndex;
	}
}

// Botao da seta direita
function avancarSlide(){
	var slides = document.querySelectorAll("#slider .slide");

	if(slideIndexAtivo < slides.length-1){
		// Qual slide que é o seguinte?
		var proximoSlideIndex = slideIndexAtivo + 1;
		var proximoSlideOrdem = proximoSlideIndex + 1;

		// Desaparecer com o slide que estava ativo
		var slideAtual = document.querySelector("#slider .slide.ativo");
		slideAtual.classList.remove("ativo");

		// Mostrar o slide
		var proximoSlide = document.querySelector("#slider .slide:nth-child("+proximoSlideOrdem+")");
		proximoSlide.classList.add("ativo");

		// Atualizar o slideIndexAtivo
		slideIndexAtivo = proximoSlideIndex;
	}
}

function irParaOSlideCorrespondente(){
	// Pegar o slide com a classe ativo
	var slideAtivo = document.querySelector(".slide.ativo");
	// Desaparece o slide ativo
	slideAtivo.classList.remove("ativo");
	// Aparecer o slide Correspondente
	// Transformar o texto em numero
	var slideIndex = parseInt( this.getAttribute("data-slide") );
	var numeroSlide = slideIndex+1;

	var slideCorrespondente = document.querySelector("#slider .slideBox .slide:nth-child("+numeroSlide+")");
	slideCorrespondente.classList.add("ativo");
	// Atualizar o slideIndexAtual
	slideIndexAtivo = slideIndex;

}


function adicionarOnClickNosBotoes(){
	// Adicionando nas setas
	var botaoVoltar = document.querySelector(".seta.esquerda");
	botaoVoltar.onclick = voltarSlide;
	var botaoAvancar = document.querySelector(".seta.direita");
	botaoAvancar.onclick = avancarSlide;

	// Adicionando nos bullets
	var bullets = document.querySelectorAll("#slider .bullet");
	for(var i=0;i<bullets.length;i++){
		bullets[i].onclick = irParaOSlideCorrespondente;
	}
}

// Se o slide existe
// Se o slider é diferente de null ele existe!
var slider = document.querySelector("#slider");
if(slider != null){
	//CRIAR OS BULLETS de acordo com a quantidade de slides
	criarBulletsNoSlider();
	adicionarOnClickNosBotoes();
}




// CODIGO PARA O FORMULARIO
// Pegar o campo
var nome = document.querySelector("#inputNome");

// Criar a validação
function validarNome(){
	// Pegar o valor dele
	var valorNome = nome.value;

	// Verificar se o valor é vazio
	if(valorNome == ""){
		// Se for vazio deixa o campo vermelho
		// // Adiciona uma classe no campo nome
		nome.parentNode.classList.add("errado");
	}else{
		nome.parentNode.classList.remove("errado");
	}
}

// Executar a validação ao sair do foco do campo
nome.onblur = validarNome;


//Validar a idade
// Pegar o campo que vai ser validado]
var idade = document.querySelector("#inputIdade");
// Criar a função da validação
function validarIdade(){
	// pegar o valor do input
	var valorIdade = idade.value;
	// verificar se o valor é menor que 18
	if (valorIdade < 18){
		//Caso seja menor que 18 deixa o campo vermelho
		idade.parentNode.classList.add("errado");
	}else{
		idade.parentNode.classList.remove("errado");
	}

}
// Executar a função ao desfocar (aplicar a algum evento, quando será executado)
idade.onblur = validarIdade;


// Selecionar o formulario
var formulario = document.querySelector("#formSugestoes");
// Criar a função que vai ser executada ao submeter o formulario

// função criarBalao: JEITO2
function adicionarBalao(nome,idade){
	// Criando uma div com classe balao
	var div = document.createElement("div");
	div.classList.add("balao");

	// Essa parte é responsável por pegar o valor do inputSugestão APENAS
	var sugestao = document.querySelector("#inputSugestao");
	// FIM

	// INSERINDO O VALOR na div que criei
	div.innerHTML= "<h3>"+nome+"</h3><span>"+idade+"</span>";

	// Inserindo a div que criei no documento.
	var baloes = document.querySelector("#baloes");
	baloes.appendChild(div);
	return false;
}

function criarNome(nome,sobrenome){
	return alert("Meu nome é" + nome + "sobrenome" + sobrenome);
}

criarNome("marina","maluta");

// função criarBalao: JEITO 1
// function adicionarBalao(){
// 	// Criar um balao que é um elemento
// 	var div = document.createElement("div");
// 	div.classList.add("balao");

// 	var p = document.createElement("p");
// 	div.appendChild(p);

// 	var sugestao = document.querySelector("#inputSugestao");
// 	var sugestaoValor = sugestao.value;

// 	// Colocando o sugestaoValor dentro do <p></p>
// 	// <p>{sugestaoValor}</p>
// 	p.innerText = sugestaoValor;

// 	// Depois inserir dentro da tag "#baloes"
// 	var baloes = document.querySelector("#baloes");

// 	baloes.appendChild(div);
// 	return false;
// }

// Atrelar a função a um evento do formulario: onsubmit
formulario.onsubmit = adicionarBalao;
