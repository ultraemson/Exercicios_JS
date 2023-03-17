export function questao(lines){
    const numeroFuncionario = parseInt(lines[0])
    const numeroHorasTrabalhadas = parseInt(lines[1])
    const valorHoraTrabalhada = parseFloat(lines[2])

    const salario = valorHoraTrabalhada * numeroHorasTrabalhadas

    console.log(`NUMBER = ${numeroFuncionario}`);
    console.log(`SALARY = U$ ${salario.toFixed(2)}`);
}
