let num = [5, 8, 4, 9, 3];

console.log(num);

num.push(7);

console.log(`o vetor agora tem ${num.length} numeros`);
console.log(`O array ordenado fica assim ${num.sort()}`);

for (let i = 0; i < num.length; i++) {
  console.log(`A posição ${i} tem o valor ${num[i]}`);
}

for (let n in num) {
  console.log(num[n]);
}


let pos = num.indexOf(4);
if (pos == -1) {
  console.log("O valor não foi encontrado");
} else {
  console.log(` o valor está na posição ${pos}`);
}
