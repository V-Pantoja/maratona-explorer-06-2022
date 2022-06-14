// variaveis
const inputPergunta = document.getElementById("inputPergunta");
const elementoResposta = document.querySelector("#resposta");
const btnPergunta = document.querySelector("#btnPergunta");
const respostas = [
   "Certeza!",
   "Não tenho tanta certeza.",
   "É decididamente assim.",
   "Não conte com isso.",
   "Sem dúvidas!",
   "Pergunte novamente mais tarde.",
   "Sim, definitivamente!",
   "Minha resposta é não.",
   "Você pode contar com isso.",
   "Melhor não te dizer agora.",
   "A meu ver, sim.",
   "Minhas fontes dizem não.",
   "Provavelmente.",
   "Não é possível prever agora.",
   "Perspectiva boa.",
   "As perspectivas não são tão boas.",
   "Sim.",
   "Concentre-se e pergunte novamente.",
   "Sinais apontam que sim.",
];

function fazerPergunta() {

   if (inputPergunta.value == "") {
      alert("Digite sua pergunta.");
      return
   }

   //pegar a pergunta
   const pergunta = `<div> ${inputPergunta.value} </div>`;

   //desabilitar o botao
   btnPergunta.setAttribute("disabled", true);

   const totalRespostas = respostas.length;

   /*
      Math.floor : arredonda para o piso
      Math.random : gera um numero aleatorio do 0 ao 1 (ex: 0,999..) sendo esse o mais alto
      Vezes totalRespostas ja que vai ser arredondado para o piso, gerando no maximo o numero maior do ÍNDICE da lista respostas
   */
   const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

   elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];

   elementoResposta.style.opacity = 1;

   // sumir a resposta depois de 3 segundos
   setTimeout(function() {
      elementoResposta.style.opacity = 0;
      inputPergunta.value = "";
      btnPergunta.removeAttribute("disabled");
   }, 5000);
}
