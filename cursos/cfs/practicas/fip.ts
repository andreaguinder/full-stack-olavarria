import { resolveObjectURL } from "buffer";

H = 0;
M = 0;
S = 0;
H:S:M
S = S + 1 ( por lo que S ahora es = a 1)
S llega a  60
S pasa a ser igual que 0, y M = M + 1; Entonces M = 60;
Sino, M = 0 y esperar 1 segundo;
Si M llega en el contador a 60, pasa a 0, entonces H = 1;
Cuando H llega a 24, espera otro segundo.

Y así va creciendo el contador que es un Reloj. Y así lo llamaría.

El código presenta 1 bucle que va incrementando los segundos para pasar a minutos y luego a horas.
