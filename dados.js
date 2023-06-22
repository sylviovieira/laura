$( document ).ready(function() {
  $("#btnSalvar").click(function(){

    let textoCopiar = '';

    /*
      pega todos os campos do formulário id="dados", transforma num JSON
      percorre o array com os dados do formulário e limpa ele para como será guardado no textoCopiar
    */
    $.each($('#dados').serializeArray(), function() {
      textoCopiar = textoCopiar+`${this.name.toUpperCase()}: ${this.value} ;`;
    });

    //joga o textoCopiar para a memória
    navigator.clipboard.writeText(textoCopiar);
  });
});