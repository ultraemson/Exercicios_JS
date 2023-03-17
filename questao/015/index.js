export function questao(lines){
    const totalPecorrido = lines[0].split(' ')
    const combustivelGasto = lines[1].split(' ')
    const consumoGasto = Number(totalPecorrido) / Number(combustivelGasto)

    console.log(`${consumoGasto.toFixed(3)} km/l`);
}