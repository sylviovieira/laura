$( document ).ready(function() {
  $("#btnSalvar").click(function(){

    // titulo principal
    let textoCopiar = 'Anamnese - Dados Coletados: \n\n';

    // subtitulo seção de identificação
    textoCopiar += 'Identificação do Recém nascido: \n';

    /*
      pega todos os campos do formulário id="dados", transforma num JSON
      percorre o array com os dados do formulário e limpa ele para como será guardado no textoCopiar
    */
    $.each($('#dados').serializeArray(), function() {
      textoCopiar = textoCopiar+`${this.name.chartAt(0).toUpperCase() + this.name.slice(1)}: ${this.value}\n\n`;
    });
    
    //joga o textoCopiar para a memória
    navigator.clipboard.writeText(textoCopiar);
  });
});
