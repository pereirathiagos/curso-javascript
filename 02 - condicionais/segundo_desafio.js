// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
// 1 - Preço Etanol;
// 1 - Preço Gasolina;
// 1 - Tipo de combustivel que está no veículo;
// 1 - Gasto Médio por KM;
// 1 - Distancia em KM da viagem;

// Imprima no Console o Valor que será gasto para realizar essa viagem.

const precoEtanol = 4.30;
const precoGasolina = 5.40;
const tipoCombustivel = 'Gasolina';
const quilometroPorLitros = 15;
const distanciaKm = 150;

const LitrosConsumidos = distanciaKm / quilometroPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = LitrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = LitrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));

}
