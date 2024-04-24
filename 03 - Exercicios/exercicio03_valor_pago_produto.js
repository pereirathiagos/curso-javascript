/*
     Elabore um algoritimo que calcule o que deve ser pafo por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
     Utilize os códigos da tabela a seguir para ler qual a condiçao de pagamento escolhida para efetuar o calculo adequado.

     Código condiçao de pagamento:
     1 - À vista, Débito recebe 10% de desconto;
     2 - À vista, no Dinheiro ou no pix, 15% de desconto;
     3 - Em duas vezes, preço normal da etiqueta sem juros;
     4 - Acima de duas vezes, preço normal da etiqueta mais juros de 10%;
*/

function aplicarDesconto(valor, desconto) {
     return (valor - (valor * desconto))
}

function aplicarJuros (valor, juros){
     return (valor + (valor * (juros)))
}

const precoEtiqueta = 100;
const formaDePagamento = 5;

if (formaDePagamento === 1) {
     console.log(aplicarDesconto(precoEtiqueta, 0.1));
} else if (formaDePagamento === 2) {
     console.log(aplicarDesconto (precoEtiqueta, 0.15));
} else if (formaDePagamento === 3) {
     console.log(precoEtiqueta);
} else {
     console.log(aplicarJuros(precoEtiqueta, 0.1));
}