$(document).ready(function() {
  $("#btnSalvar").click(function() {
    let textoCopiar = 'Anamnese - Dados Coletados:\n\n'; // Título principal

    // Função para formatar os dados de cada classe
    function formatarDadosPorClasse(classe) {
      const elementos = $(`#${classe} input:checked, #${classe} input[type=text], #${classe} input[type=number]`);
      let dadosClasse = '';
      elementos.each(function() {
        const nome = $(this).attr('name');
        const valor = $(this).val();
        if (valor && valor.trim() !== '') {
          dadosClasse += `${nome.charAt(0).toUpperCase() + nome.slice(1)}: ${valor}  `;
        }
      });
      if (dadosClasse) {
        textoCopiar += dadosClasse + '\n';
      }
    }

    // Coletar todas as classes do formulário
    const classesDoFormulario = [];
    $('#dados div[class]').each(function() {
      classesDoFormulario.push($(this).attr('class'));
    });

    // Iterar sobre cada classe e formatar os dados
    classesDoFormulario.forEach(classe => {
      formatarDadosPorClasse(classe);
    });

    // Copia os valores formatados para a memória
    navigator.clipboard.writeText(textoCopiar);
  });
});
