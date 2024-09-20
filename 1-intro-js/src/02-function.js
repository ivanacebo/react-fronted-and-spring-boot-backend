// Función normal
function sayHellow(name = 'Pepe', age = 18) {

    const greeting = `Hola mundo desde una funciton ${name} edad ${age}`;
    //console.log(`Hola mundo function`);

    return greeting;
}

// Función anonima
const functionAnonym = function sayHellow(name = 'Pepe', age = 18) {

    const greeting = `Hola mundo desde una funciton ${name} edad ${age}`;

    return greeting;
}

// Función flecha o expresión lambda
const functionFlecha = (name = 'Pepe', age = 18) => 
    `Hola mundo desde una funciton ${name} edad ${age}`;

const add = (a = 0, b = 0) => a + b;
    

console.log(sayHellow('ivan'));

console.log(functionAnonym('Jacobo', 17));

console.log(functionFlecha('Raquel', 27));

console.log(add(10, 5));