const users = ['Pepe', 'Ana', 'Maria', 'Juan', 'Sebastyan', 'Carlos', 'Luis', 'Josefa'];

const[a, b, ...r] = users;

console.log(a, b, ...r);

// utilizamos ... el spred para poder pintar todos los elementos del arreglo
// utilizamos ... el spread en la const para pintar los elementos que queramos y en el console no s saca un objeto con el resto
// podemos sacar a, b, , , , c los elementos que queramos tan solo