let amigo = {
  nome: "Jose",
  sexo: "M",
  peso: 85.4,
  engordar(p = 0) {
    this.peso += p;
    console.log("Engordou");
  },
};

amigo.engordar(2);
console.log(amigo.peso);
