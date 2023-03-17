export function questao(lines){
    const valores = lines[0].split(' ')

    const a = Number(valores[0])
    const b = Number(valores[1])
    const c = Number(valores[2])

    const maiorAB = (a + b + Math.abs(a - b)) / 2
    const maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) / 2 

    console.log(`${maiorABC} eh o maior`);
}