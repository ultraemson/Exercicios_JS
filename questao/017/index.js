export function questao(lines){
    const umKm = 12
    const tempoGastoViagem = lines[0].split(' ')
    const velocidadeMediaViagem = lines[1].split(' ')
    
    const totalGasto = (Number(tempoGastoViagem) * Number(velocidadeMediaViagem)) / umKm
    console.log(`${totalGasto.toFixed(3)}`);
}