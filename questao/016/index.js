export function questao(lines){
    const [x1,y1] = lines[0].split(' ')
    const [x2,y2] = lines[1].split(' ')
    const distancia = Math.sqrt(Math.pow(Number(x2) - Number(x1),2) + Math.pow(Number(y2) - Number(y1),2))
    console.log(`${distancia.toFixed(4)}`);
}