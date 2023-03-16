export function questao(lines){
    var a = paraseInt(lines[0])
    var b = paraseInt(lines[1])
    var c = paraseInt(lines[2])
    var d = paraseInt(lines[3])

    var diferenca = (a * b - c*d)
    console.log(`DIFERENCA = ${diferenca}`);
}