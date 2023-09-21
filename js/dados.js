$(document).ready(function() {
  $("#btnSalvar").click(function() {

    let dadosFormulario = {};

    // Puxar os dados de cada input e select do formulário
    $('#dados input, #dados select').each(function() {
      const nome = $(this).attr('name');
      const valor = $(this).val();
      dadosFormulario[nome] = valor;
    });

    console.log(dadosFormulario); // Aqui você pode processar os dados conforme necessário
  });
});
