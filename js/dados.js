$("#btnSalvar").click(function() {

    let textoCopiar = ''; // Título principal

    $.each($('#dados').serializeArray(), function() {
      // Adiciona um título para cada campo e formata o valor em um novo parágrafo
      textoCopiar += `${this.name.charAt(0).toUpperCase() + this.name.slice(1)}: ${this.value}\n`;
    });

    // Copia os valores formatados para a memória
    navigator.clipboard.writeText(textoCopiar);
  });
});
