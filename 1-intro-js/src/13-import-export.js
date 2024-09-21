// ruta del archivo a importar y (export) en el archivo a exportar
import {invoices, papper, invoicesByClientName} from './data/invoices';

console.log(invoices);

// .map para crear un nuevo array. Siempre tiene que devolver algo
const invoicesCloneName = invoices.map(i => {
    return i.name;
});

console.log(invoicesCloneName);

const invoicesCloneClient = invoices.map(i => {
    return i.client.name;
});

console.log(invoicesCloneClient);

// .find para hacer busquedas dentro de un array
const invoiceById = invoices.find(i => i.id ===2)
console.log(invoiceById);

// .filter si se cumple una condicion va a crear un nuevo array que cumpla dicha condicion
const invoiceFilter = invoices.filter(i => i.items.includes(papper));
console.log(invoiceFilter);

console.log('Filter eliminar un id en concreto')
const invoiceDeleted = invoices.filter(i => i.id != 2);
console.log(invoiceDeleted);

// .some devuelve un bolleano para saber si se cumple 
const result = invoices.some(i => i.client.name === 'Ivan');
console.log(result);

console.log('buscar en el array con un export')
console.log(invoicesByClientName('Ivan'));