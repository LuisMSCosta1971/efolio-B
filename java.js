document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm"); // ID correto do formulário

  if (form) { 
      form.addEventListener("submit", function(event) {
          event.preventDefault(); // Previne o envio real para teste do alerta
          
          // Capturar valor do campo 'nome'
          const nome = document.getElementById("nome").value;

          // Verificar se um nome foi preenchido antes de exibir o alerta
          if (nome.trim() !== "") {
              alert(`Obrigado pelo seu testemunho, ${nome}!`);
          } else {
              alert("Por favor, preencha seu nome antes de enviar!");
          }
      });
  }
});



function expandImage(img) {
  var modal = document.getElementById("imageModal");
  var expandedImg = document.getElementById("expandedImg");
  expandedImg.src = img.src;
  modal.style.display = "flex";
}


//Menu lateral
function toggleMenu() {
  let sidebar = document.getElementById("sidebar");

  // Verifica o estado do menu e alterna corretamente
  if (sidebar.style.left === "" || sidebar.style.left === "-250px") {
      sidebar.style.left = "0"; // Mostra o menu
  } else {
      sidebar.style.left = "-250px"; // Esconde o menu
  }
}






