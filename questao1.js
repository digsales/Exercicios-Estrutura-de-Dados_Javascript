function somarNumeros(qtdNumeros) {
  let i = 1;
  let soma = 0;
  let numeros = [];
  while (i <= qtdNumeros) {
    num = parseInt(prompt("Digite um número: "));
    numeros.push(num);
    soma += num;
    i++;
  }
  console.log(`${numeros.join(" + ")} = ${soma}`);
}

somarNumeros(parseInt(prompt("Quantos números serão somados?: ")));
