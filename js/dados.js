var btnSalvar = document.querySelector("#btnSalvar");

btnSalvar.addEventListener("click", function (event) {
  event.preventDefault();
  var dados =document.querySelector("#dados");
  console.log(dados.peso.value)
})