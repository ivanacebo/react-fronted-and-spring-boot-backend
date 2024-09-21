// Es una promesa y devuelve un response que devuelve otra promesa para poder convertirlo a otro formato
const httpClient = fetch('http://jsonplaceholder.typicode.com/users');

/* httpClient.then(response => {
    response.json().then (data => {
        console.log(data);
    });
}); */

// Mostramos los datos que traemos de nuestra api 
httpClient
    .then (response => response.json())
    .then(data => console.log(data));

    console.log('Hola que tal');