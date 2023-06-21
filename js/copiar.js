function copiarFormulario() {
  var formulario = document.getElementById('formulario');
  var inputTemporario = document.createElement('input');
  inputTemporario.value = formulario.outerHTML;
  document.body.appendChild(inputTemporario);
  inputTemporario.select();
  document.execCommand('copy');
  document.body.removeChild(inputTemporario);
  alert('O formulário foi copiado para a área de transferência!');
}
