var velocidade = 49;
var vel_limite = 50;
console.log(`A velocidade do seu carro é ${velocidade}km/h`);

if (velocidade > vel_limite) {
  console.log(
    ` a sua Velocidade de ${velocidade}km/h exedeu o limite de ${vel_limite}km/h, MULTADO `
  );
} else {
  console.log(`Dirija sempre com Cinto de Segurança`);
}
