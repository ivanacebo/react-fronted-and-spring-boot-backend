// export palabra clave para decir que queremos exportar de un archivo.

export const papper = {
    producto: 'papper',
    precio: 100,
    cantidad: 10,
};

export const invoices = [
    {
        id: 1,
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
            papper,
        ]
    },
    {
        id: 2,
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
        id: 3,
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
            papper,
        ]
    }
];

export const invoicesByClientName = (clientName) => {
    return invoices.find(i => i.client.name == clientName);
}
