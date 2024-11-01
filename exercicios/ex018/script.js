function contador() {
  var txtInicio = document.getElementById("txtInicio");
  var txtFim = document.getElementById("txtFim");
  var txtPasso = document.getElementById("txtPasso");
  var res = document.getElementById("res");
  if (
    txtInicio.value.length == 0 ||
    txtFim.value.length == 0 ||
    txtPasso.value.length == 0
  ) {
    window.alert("Faltam Dados");
    res.innerHTML = "Impossivel fazer a Contagem";
  } else {
    res.innerHTML = "Contando: <br>";
    var inicioNum = Number(txtInicio.value);
    var fimNum = Number(txtFim.value);
    var passoNum = Number(txtPasso.value);
    if (passoNum <= 0) {
      window.alert("Passo Invalido");
      passoNum = 1;
    }
    if (inicioNum < fimNum) {
      for (var c = inicioNum; c <= fimNum; c += passoNum) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    } else {
      for (c = inicioNum; c >= fimNum; c -= passoNum) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
      res.innerHTML += `\u{1F3C1}`;
    }
  }
}
