let products = ['mesa', 'silla', 'notebook', 'teclado'];

products.push('pantalla lcd');

// Con concat creamos una nueva instanc
products = products.concat('mouse', 'sony tv');

const fruits = ['peras', 'manzanas', 'sandias', 'melocotonbes'];

const market = [...products, ...fruits, 'agua', 'harina'];

const market2 = products.concat(fruits, 'agua', 'harina');

market.forEach((list, i) => console.log(`Posicion ${i} contiene ${list}`));
console.log(market2);

