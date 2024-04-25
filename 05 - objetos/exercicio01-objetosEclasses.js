
/*    Crie uma classe para representar carros. 
      Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
      Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
      gasto em reais para realizar este percurso.
*/ 


class Carro {
    marca;
    cor;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoPercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;

    }

}

const palio = new carro('Fiat', 'verde', 1 / 10);
console.log(palio.calcularGastoPercurso(55, 5));
const uno = new carro('Fiat', 'preto', 1 / 12);
console.log(uno.calcularGastoPercurso(55, 5));