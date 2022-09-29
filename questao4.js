var qcobaiasT = 0;
var quantidadeR = 0;
var quantidadeC = 0;
var r = 0;
var c = 0;

for (i = 0; i < 15; ) {
  var qcobaias = Number(prompt("Quantida de cobaia(s) utilizada(s): "));
  var codigo = Number(
    prompt("Codigo Utilizado (1 sendo coelhos ou 2 sendo rato): ")
  );
  qcobaiasT = qcobaiasT + qcobaias;
  i++;
  if (codigo == 1) {
    console.log(`${qcobaias} Coelho(s) no ${[i]} teste`);
    c++;
    quantidadeC = quantidadeC + qcobaias;
  } else if (codigo == 2) {
    console.log(`${qcobaias} Rato(s) no ${[i]} teste`);
    r++;
    quantidadeR = quantidadeR + qcobaias;
  }
}

var PercentualC = quantidadeC / 100;
var PercentualR = quantidadeR / 100;

console.log(`O total de cobaias Utilizada foi: ${qcobaiasT}`);
console.log(
  `O total de ratos foi ${r} e de Coelhos foi ${c}\nCom um precentual de ${PercentualC} ou ${
    PercentualC * 100
  }% para Coelho \ne ${PercentualR} ou ${PercentualC * 100}% para Rato.`
);
