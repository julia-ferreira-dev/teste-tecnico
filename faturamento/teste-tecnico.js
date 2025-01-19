import fs from "fs";

const filePath = "dados/dados.json";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo JSON:", err);
    return;
  }

  const faturamento = JSON.parse(data);

  const faturamentoValidos = faturamento
    .filter((dia) => dia.valor > 0)
    .map((dia) => dia.valor);

  const menorValor = Math.min(...faturamentoValidos);
  const maiorValor = Math.max(...faturamentoValidos);

  const mediaMensal =
    faturamentoValidos.reduce((acc, valor) => acc + valor, 0) /
    faturamentoValidos.length;

  const diasAcimaMedia = faturamentoValidos.filter(
    (valor) => valor > mediaMensal
  ).length;

  console.log("Parte 1: Análise de Faturamento Diário\n");
  console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
  console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
  console.log(`Dias acima da média mensal: ${diasAcimaMedia} dias\n`);

  const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const faturamentoTotal = Object.values(faturamentoEstados).reduce(
    (acc, valor) => acc + valor,
    0
  );

  const percentuaisEstados = Object.entries(faturamentoEstados).map(
    ([estado, valor]) => ({
      estado,
      percentual: ((valor / faturamentoTotal) * 100).toFixed(2),
    })
  );

  console.log("Parte 2: Percentual de Faturamento por Estado\n");
  console.log(`Faturamento total: R$ ${faturamentoTotal.toFixed(2)}\n`);
  percentuaisEstados.forEach(({ estado, percentual }) => {
    console.log(`${estado}: ${percentual}%`);
  });
});