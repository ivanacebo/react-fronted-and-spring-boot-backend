const user = {
    username: 'ivan',
    email : 'correo@google.com',
    age : 20,
    ranking : 9,
}

// Desestructuramos el objeto en una función
const detail = ({username, email}) => {
    console.log(`El detalle del usuario ${username} es ${email}`);
}

detail(user);

