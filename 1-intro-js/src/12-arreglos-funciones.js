const papper = {
    producto: 'papper',
    precio: 100,
    cantidad: 10,
};

const invoices = [
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
const invoiceById = invoices.find(i => i.name === 'Compras de papeleria')
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
