
const precoCombustivel = 5.79;
const quilometroPorLitros = 10;
const distanciaKm = 100;

const LitrosConsumidos = distanciaKm / quilometroPorLitros;
const valorGasto = LitrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));




