const average = 5.9;
let status2;

status2 = (average >= 5.5 ) ? 'Aprobado' : 'Suspenso';

console.log(`Resultado: ${status2}`);

if (average>= 5.45) {
    status2 = 'Aprobado';
} else {
    status2 = 'Suspenso';
}
console.log(`Resultado con if: ${status2}`);

let max = 0;

const a = 5;
const b = 8;
const c = 3;

// max = (a > b) ? a : b;
// max = max > c ? max : c;

// Comparamos a con b y sacamos el mayor, luego comparamos con c y sacamos el mayor.
// Si a o b es mayor que c hacemos su comparacion nuevamente para escribir este numero o sino c.
max = (a > b ? a : b) > c ?(a > b ? a : b) : c;

console.log (`El número mayor es : ${max}`);