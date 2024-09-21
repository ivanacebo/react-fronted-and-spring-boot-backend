/*httpClient
    .then (response => response.json())
    .then(data => console.log(data));
*/

// Promesa con funcion asyncrona donde podemos leer los datos de nuestra api con json y traerlos al fronted
const findAllUsers = async() => {
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    return await response.json();
}

const users = await findAllUsers();
console.log(users);
console.log('Hola que tal');