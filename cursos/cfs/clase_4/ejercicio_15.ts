
/*Calcular las calificaciones de un grupo de alumnos, donde la nota final de cada alumno se calcula según el siguiente criterio:
•
la parte práctica vale el 10%
•
la parte de problemas vale el 50%
•
la parte teórica el 40%
Se debe ingresar el nombre del alumno y sus tres notas, se escribirá el resultado y se volverá a pedir los datos del siguiente alumno hasta que el nombre sea una cadena vacía
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las notas, mostrará un mensaje de error y continuará con otro alumno)*/


import * as rls from 'readline-sync';

let nombreAlumno: string = rls.question('Ingrese nombre del alumno: ');

while (nombreAlumno !== '') {
    let notaPractica: number = rls.questionFloat('Ingrese nota práctica del alumno (0 - 10): ');
    let notaTeorica: number = rls.questionFloat('Ingrese nota teórica del alumno (0 - 10): ');
    let notaProblemas: number = rls.questionFloat('Ingrese nota de los problemas del alumno (0 - 10): ');

    // Verificar que las notas estén dentro del rango permitido
    if (notaPractica < 0 || notaPractica > 10 || notaTeorica < 0 || notaTeorica > 10 || notaProblemas < 0 || notaProblemas > 10) {
        console.log('Las notas son inválidas. Deben estar entre 0 y 10.');
    } else {
        // Calcular nota final según el criterio especificado
        let notaFinal: number = (notaPractica * 0.1) + (notaTeorica * 0.4) + (notaProblemas * 0.5);
        console.log('Nombre del alumno:', nombreAlumno);
        console.log('Nota final:', notaFinal.toFixed(2));
    }

    nombreAlumno = rls.question('Ingrese nombre del siguiente alumno (o dejar vacío para terminar): ');
}