export function questao(lines){
    const [codigoPeca, numeroPecas, valorUnitario] = lines[0].split(' ')
    const [codigoPeca2, numeroPecas2, valorUnitario2] = lines[1].split(' ')

    const valor = (Number(numeroPecas) * Number(valorUnitario)) + Number((numeroPecas2) * Number(valorUnitario2))
    console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`);
}