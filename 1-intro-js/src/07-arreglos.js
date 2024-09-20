const products = ['mesa', 'silla', 'notebook', 'teclado'];

products.push('pantalla lcd');
products.push('mouse', 'sony tv');

console.log(products);

products.forEach((elemento) => console.log(elemento));

products.forEach(console.log);

for (const i of products){
    console.log(i);
}

for (let i = 0; i < products.length; i++) {
    const element = products[i];
    console.log(`Esapacio ${i} es el elemento ${element}`);
}