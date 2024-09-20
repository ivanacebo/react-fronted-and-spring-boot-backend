const invoices = [
    {
        name: 'Compras de oficina',
        client: {
            name: 'Jhon',
            lastname: 'Doe',
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
        ]
    },
    {
        name: 'Compras de computacion',
        client: {
            name: 'Pepe',
            lastname: 'Guatemalteco',
        },
        items: [
            {
                producto: 'keyboard',
                precio: 399,
                cantidad: 2,
            },
            {
                producto: 'screen 17',
                precio: 400,
                cantidad: 1,
            },
            {
                producto: 'cpu intel',
                precio: 1000,
                cantidad: 10,
            },
        ]
    },
    {
        id: 10,
        name: 'Compras de papeleria',
        client: {
            name: 'Ivan',
            lastname: 'Acebo',
        },
        items: [
            {
                producto: 'pencil',
                precio: 250,
                cantidad: 1,
            },
            {
                producto: 'paper',
                precio: 10,
                cantidad: 10,
            },
        ]
    }
];

console.log(invoices);

const invoicesCloneName = invoices.map(i => {
    return i.name;
});

console.log(invoicesCloneName);

const invoicesCloneClient = invoices.map(i => {
    return i.client.name;
});

console.log(invoicesCloneClient);