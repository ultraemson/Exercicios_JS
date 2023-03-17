export function questao(lines){
    const pi = 3.14159
    const [a, b, c] = lines[0].split(' ')

    const triangulo = (Number(a) * Number(c)) / 2
    const circulo = (pi * Math.pow(Number(c), 2))
    const trapezio = ((Number(a) + Number(b)) * Number(c)) / 2 
    const quadrado = Math.pow(Number(b), 2)
    const retagulo = Number(a) * Number(b)

    console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
    console.log(`CIRCULO: ${circulo.toFixed(3)}`);
    console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
    console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
    console.log(`RETANGULO: ${retagulo.toFixed(3)}`);
}