function verificaIdade() {
  var data = new Date();
  var ano = data.getFullYear();
  var formAno = document.getElementById("txtano");
  var res = document.getElementById("res");

  if (formAno.value.length == 0 || Number(formAno.value) > ano) {
    window.alert("Verifique os dados novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(formAno.value);
    var genero = "";

    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "crianca-m.png");
      } else if (idade < 21) {
        img.setAttribute("src", "jovem-m.png");
      } else if (idade < 60) {
        img.setAttribute("src", "adulto-m.png");
      } else {
        img.setAttribute("src", "idoso-m.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "crianca-f.png");
      } else if (idade < 21) {
        img.setAttribute("src", "jovem-f.png");
      } else if (idade < 60) {
        img.setAttribute("src", "adulto-f.png");
      } else {
        img.setAttribute("src", "idoso-f.png");
      }
    }
    res.innerHTML = `É um  ${genero} com a Idade calculada de: ${idade} anos`;
    res.appendChild(img);
  }
}
