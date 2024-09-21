// ruta del archivo a importar y (export) en el archivo a exportar
import {findInvoiceById} from './data/invoices';

// Promesa que aparece despues de 2.5 segundos


// .catch para atrapar algun error
// .then cuando intentamos ejecutar algo y se cumple la promesa va con el resolve
//. finally siempre se va a ejecutar para finalizar
/*promise.then((result) => {
    console.log('Realizada con exito alguna tarea con demora...');
    console.log(result);
}). catch ((error) => {
    console.error(error); // Mensaje de error
    console.warn(error); // Mensaje de warning
})*/

findInvoiceById(3)
    .then(console.log)
    .catch(console.error);