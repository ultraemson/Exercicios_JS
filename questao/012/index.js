export function questao(lines) {
    const pi = 3.14159
    const raio = Number(lines[0])
    const volume = ((4/3.0) * pi * (Math.pow(raio,3)))
    console.log(`VOLUME = ${volume.toFixed(3)}`);
}