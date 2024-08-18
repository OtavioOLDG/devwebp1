// Módulo JavaScript
export function exibirMensagem() {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Mensagem alterada pelo JavaScript!";
}

// Chamando a função ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  exibirMensagem();
});
