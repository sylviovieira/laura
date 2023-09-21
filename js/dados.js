document.addEventListener("DOMContentLoaded", function() {
  const btnSalvar = document.getElementById("btnSalvar");

  btnSalvar.addEventListener("click", function() {
    let textoCopiar = 'Anamnese - Dados Coletados:\n\n'; // Título principal

    // Função para formatar os dados de cada classe
    function formatarDadosPorClasse(classe) {
      const elementos = document.querySelectorAll(`.${classe} input:checked, .${classe} input[type=text], .${classe} input[type=number]`);
      let dadosClasse = '';
      elementos.forEach(elemento => {
        const nome = elemento.name;
        const valor = elemento.value;
        if (valor && valor.trim() !== '') {
          dadosClasse += `${nome.charAt(0).toUpperCase() + nome.slice(1)}: ${valor}  `;
        }
      });
      if (dadosClasse) {
        textoCopiar += dadosClasse + '\n';
      }
    }

    // Coletar todas as classes do formulário
    const classesDoFormulario = Array.from(document.querySelectorAll('#dados div[class]')).map(div => div.className);

    // Iterar sobre cada classe e formatar os dados
    classesDoFormulario.forEach(classe => {
      formatarDadosPorClasse(classe);
    });
