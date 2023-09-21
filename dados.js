$(document).ready(function() {
  $("#btnSalvar").click(function() {

    let textoCopiar = 'Anamnese - Dados Coletados:\n\n'; // Título principal

    $.each($('#dados').serializeArray(), function() {
      // Adiciona um título para cada campo e formata o valor em um novo parágrafo
      textoCopiar += `${this.name.charAt(0).toUpperCase() + this.name.slice(1)}: ${this.value}\n\n`;
    });

    // Adiciona um rodapé ao texto copiado
    textoCopiar += '----- FIM DOS DADOS -----\n\n';
    textoCopiar += 'Copyright 2023 - Laboratório de Produtos Avançados do Mestrado em Saúde Materno Infantil - by Sylvio Vieira\n';
    textoCopiar += 'Facebook | Twitter';

    // Copia os valores formatados para a memória
    navigator.clipboard.writeText(textoCopiar);
  });
});
