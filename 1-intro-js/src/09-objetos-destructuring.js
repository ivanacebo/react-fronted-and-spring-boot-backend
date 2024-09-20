const user = {
    username: 'ivan',
    email : 'correo@google.com',
    age : 20,
    ranking : 9,
}

// Desestructuramos el objeto
const {username, ranking, age} = user;

console.log(`${username} tiene ${age} años y esta en el puesto ${ranking} del ranking`);

const username1 = user.username;
const ranking1 = user.ranking;

console.log(username);
console.log(ranking);

