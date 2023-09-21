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

    // Formatar os dados de cada classe
    formatarDadosPorClasse('Identificação');
    formatarDadosPorClasse('estadoGeral');
    formatarDadosPorClasse('estadoDaPele');
    formatarDadosPorClasse('krammer');
    formatarDadosPorClasse('millium');
    formatarDadosPorClasse('cabeca');
    formatarDadosPorClasse('linfonodos');

    // Copia os valores formatados para a memória
    navigator.clipboard.writeText(textoCopiar);
  });
});
