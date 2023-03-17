export function questao(lines){
    const [name, salario, totalVendas] = lines
    const salarioTotal = Number(salario) + (Number(totalVendas) * 0.15)
    console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`);
}