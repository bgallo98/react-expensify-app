//object destructuring

// const person = {
//     name: 'Brandon',
//     age: 22,
//     location: {
//         city: 'Dallas',
//         temp: 92
//     }
// };


// const {name, age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`It's ${person.location.temp} in ${person.location.city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//          name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);
/* ---------------------------------------- */

// array destructuring

const address = ['777 lake carolyn pkwy', 'Irving', 'Texas', '75039'];

const [, city, state = 'New York'] = address;

console.log(`This city is ${city} and state is ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, ,medium] = item;

console.log(`a medium ${product} cost ${medium}`);

