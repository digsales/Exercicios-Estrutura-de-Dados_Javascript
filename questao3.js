codigo = [100, 101, 102, 103, 104, 105];
produto = [
  "Cachorro quente",
  "Bauru Simples",
  "Bauru com ovo",
  "Hamburguer",
  "Cheeseburguer",
  "Refrigerante",
];
preco = [1.7, 2.3, 2.6, 2.4, 2.5, 1];
somaTotal = 0;

console.log("————————————————————————————————————————");
console.log("Cardápio");
console.log("————————————————————————————————————————");

for (i = 0; i < codigo.length; i++) {
  console.log(`${codigo[i]} _ ${produto[i]} - R$${preco[i]}`);
}

console.log("————————————————————————————————————————");

while (true) {
  try {
    codigoDesejado = parseInt(
      prompt("Digite um código (0 para encerrar): ").trim()
    );
    if (codigoDesejado === 0) {
      break;
    } else {
      for (i = 0; i < codigo.length; i++) {
        if (codigoDesejado == codigo[i]) {
          console.log(
            `${produto[i]} escolhido, valor R$${preco[i]
              .toFixed(2)
              .replace(".", ",")}`
          );
          somaTotal += preco[i];
        }
      }
    }
  } catch {
    console.log("ERROR! Digite um valor inteiro!");
  }
}
console.log("————————————————————————————————————————");
console.log(
  `Pedido finalizado\nPreço total: R$${somaTotal.toFixed(2).replace(".", ",")}`
);
console.log("————————————————————————————————————————");
