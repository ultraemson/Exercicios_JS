export function questao(lines){
    const a = parseFloat(lines[0])
    const b = parseFloat(lines[1])
    const media = ((a*3.5)+(b*7.5))/11
    console.log(`MEDIA = ${media.toFixed(5)}`);
}