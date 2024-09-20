const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'Jhon',
        lastname: 'Doe',
        age: 20
    },
    items: [
        {
            producto: 'keyboard',
            precio: 399,
            cantidad: 2,
        },
        {
            producto: 'mouse',
            precio: 200,
            cantidad: 1,
        },
        {
            producto: 'paper',
            precio: 100,
            cantidad: 10,
        },
    ],
    amount: function () {
        let total = 0;
        this.items.forEach(item => {
            total = total + item.precio * item.cantidad;
        })
        return total;
    },
    gretting: () => {
        return `Hola ${invoice.client.name} esta es una función dentro de la invoice ${invoice.name}`
    }
};

// solución con ? para no tener que hacer el if y else
console.log(invoice.company?.name);
console.log(invoice.client?.name);
console.log(invoice.client?.firstname);

console.log(invoice.client?.address?.street);

if (invoice.company != undefined && invoice.company.name) {
    console.log('Perfecto');
} else {
    console.log('No hay empresa');
}