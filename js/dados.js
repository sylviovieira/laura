$(document).ready(function() {
  $("#btnSalvar").click(function() {

    let textoCopiar = 'Anamnese - Dados Coletados:\n\n'; // Título principal

    // Função para formatar os dados de cada classe
    function formatarDadosPorClasse(classe) {
      const elementos = $(`.${classe} input:checked, .${classe} input[type=text], .${classe} input[type=number]`);
      elementos.each(function() {
        const nome = $(this).attr('name');
        const valor = $(this).val();
        if (valor && valor.trim() !== '') {
          textoCopiar += `${nome.charAt(0).toUpperCase() + nome.slice(1)}: ${valor}\n`;
        }
      });
      textoCopiar += '\n';
    }

    // Lista de classes no formulário
    const classes = ['Identificação', 'estadoGeral', 'estadoDaPele', 'krammer', 'millium', 'cabeca', 'linfonodos'];

    // Iterar sobre cada classe e formatar os dados
    classes.forEach(classe => {
      formatarDadosPorClasse(classe);
    });

    // Copia os valores formatados para a memória
    navigator.clipboard.writeText(textoCopiar);
  });
});
