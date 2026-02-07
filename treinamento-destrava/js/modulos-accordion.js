(function(){
const moduloItem = document.querySelectorAll(".modulos-accordion-section .modulo-item");
const moduloContents = document.querySelectorAll(".modulos-accordion-section .modulo-item .modulo-content");

// Objeto para armazenar as alturas de cada módulo
const moduloHeights = {};

// Registrar a altura de cada módulo quando o JS carrega
moduloItem.forEach((m, i) => {
  // Primeiro, garantir que o conteúdo esteja visível para medir
  moduloContents[i].style.height = "auto";
  // Registrar a altura real
  moduloHeights[i] = moduloContents[i].scrollHeight;
});

// Aplicar estados iniciais (primeiro aberto, demais fechados)
moduloItem.forEach((m, i) => {
  if (i === 0) {
    // Primeira sessão aberta por padrão
    m.classList.add("open");
    m.classList.remove("close");
    moduloContents[i].style.height = `${moduloHeights[i]}px`;
  } else {
    // Demais fechadas
    m.classList.add("close");
    m.classList.remove("open");
    moduloContents[i].style.height = `0px`;
  }
});

// Adicionar event listeners
moduloItem.forEach((m, i) => {
  m.addEventListener("click", function openOrClose(){
    const haveClass = m.classList.value.includes("close");

    if(haveClass){
      // Fecha todos os outros
      moduloItem.forEach((mod, idx) => {
        if (idx !== i) {
          mod.classList.remove("open");
          mod.classList.add("close");
          moduloContents[idx].style.height = `0px`;
        }
      });
      
      // Abre o clicado usando a altura registrada
      m.classList.remove("close");
      m.classList.add("open");
      moduloContents[i].style.height = `${moduloHeights[i]}px`;
    } else {
      // Fecha o clicado
      moduloContents[i].style.height = `0px`;
      m.classList.remove("open");
      m.classList.add("close");
    }
  });
});

})();

