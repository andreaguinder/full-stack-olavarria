import * as rls from 'readline-sync';

let llegadaColectivo : string;

llegadaColectivo = rls.question('¿Llegó el colectivo? (s/n)');

while (llegadaColectivo == 'n') {
    console.log('Todavía no llegó, seguí esperando... ');

    llegadaColectivo = rls.question('¿Llegó el colectivo? (s/n)');
}

console.log('Llegó el colectivo.');
