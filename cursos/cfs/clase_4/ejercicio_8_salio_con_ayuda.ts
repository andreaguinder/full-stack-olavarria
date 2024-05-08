/*Cree un algoritmo que visualice los
números que son múltiplos de 2 o
de 3 que hay entre 1 y 100
• Tener en cuenta que hay números
que son múltiplos de 2 y de 3 al
mismo tiempo
• En dichos casos, solamente
indique el número una vez/*  */


console.log("Los números que son múltiplos de 2 o de 3 entre 1 y 100 son:");

for (let inicial = 1; inicial <= 100; inicial++) {
    if (inicial % 2 === 0 || inicial % 3 === 0) {
        console.log(inicial);
        // Si un número es divisible por ambos, evita imprimirlo de nuevo.
        if (inicial % 2 === 0 && inicial % 3 === 0) {
            inicial += 2;
        }
    }
}