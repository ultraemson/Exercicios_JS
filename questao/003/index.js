export function questao(lines){
    const pi = 3.14159
    const n = parseFloat(lines[0])
    const area = Math.pow(n,2) * pi
    console.log(`A=${area.toFixed(4)}`);
} 