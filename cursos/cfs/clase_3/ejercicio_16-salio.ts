/*• Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguiente
tabla:
53
Sueldo Actual Sueldo con Aumento
0 - 15.000 $ 20%
15.001 - 20.000 $ 10%
20.001 - 25.000 $ 5%
Más de 25.000 $ No hay aumento
• Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y
se lo muestre
*/

import * as rls from 'readline-sync';

let salario: number = rls.questionInt("Ingrese el salario del empleado: ");
switch (true) {
    case (salario === 15000):
        console.log("Entregar premio, el sueldo final será de $" + (salario * 1.2));
        break;
    case (salario > 15001 && salario <= 20000):
        console.log("Entregar premio, el sueldo final será de $" + (salario * 1.1));
        break;
    case (salario > 20001 && salario <= 25000):
        console.log("Entregar premio, el sueldo final será de $" + (salario * 1.05));
        break;
    default:
        console.log("El salario será sin aumento, es decir: $" + salario);
}