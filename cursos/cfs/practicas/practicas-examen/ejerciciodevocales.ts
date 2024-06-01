function stringDeCaracteres(longitud: number): string {
    let caracteres = 'AABCDEEeeeFGHIIIJKLMNOOOOPQRStuuuuuvxYZ';
    let resultado = '';
    for (let i = 0; i < longitud; i++) {
        resultado += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    return resultado;
}

function contarVocales(texto: string): number[] {
    let contador: number[] = [0, 0, 0];
    const vocales = ['A', 'E', 'O'];
    for (const letra of texto) {
        const vocal = letra.toUpperCase();
        const index = vocales.indexOf(vocal);
        if (index !== -1) {
            contador[index]++;
        }
    }
    return contador;
}

// Generar un string
const miString = stringDeCaracteres(15);
console.log(`String generado: ${miString}`);

// Contar la cantidad de A, E y O
const cantidades = contarVocales(miString);
console.log(`Cantidad de A, E y O: ${cantidades}`);