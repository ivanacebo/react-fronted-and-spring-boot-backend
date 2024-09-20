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

// const invoice2 = invoice;
const invoice2 = {...invoice};

const result = invoice == invoice2;

if (result) {
    console.log(result);
} else {
    console.log('No son iguales');
} 

invoice2.id = 20;
console.log(invoice.id);
console.log(invoice2.id);