let firstname = 'Pepe';
firstname = 'Iván';

const lastName = 'Acebo';
const condicion = true;

// Los objetos que se guarden en la constante no pueden cambiar.
// Los objetos que se guarden en el let se pueden cambiar mas adelante.

if (condicion) {
    let firstname = 'Jacobo';
    console.log(firstname);
}
console.log(`Hello World ${firstname} ${lastName}`);

console.log(`Soy ${firstname} con apellido ${lastName} 
    y estoy aprendiendo js ${condicion}`)