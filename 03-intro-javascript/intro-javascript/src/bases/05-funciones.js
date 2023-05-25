// Funciones
// Al declarar una funciona de esta manera se puede 'sobreescribir' la referencia de la misma, quiza es mejor asignar a una const
// function saludarTest(nombre) { 
//     return `Hola ${nombre}`;
// }

const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

// Arrow function 
const saludar2 = (nombre) => {
    return `Hola 2, ${nombre}`
}

const saludar3 = (nombre) => `Hola 3, ${nombre}`;
const saludar4 = () => `¡Hola Mundo react!`;

// console.log(saludar('Tony'));
console.log(saludar2('Sarah'));
console.log(saludar3('Daniel'));
console.log(saludar4());


// const getUser = () => {
//     return {
//         uid: 'ABCD123',
//         username: 'Eldon_8765'
//     }
// };

const getUser = () => ({
    uid: 'ABCD123',
    username: 'Eldon_8765'
});

const user = getUser();
console.log( user );


// Función notación explicita común
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABCD4567',
        username: nombre
    }
}

const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABCD4567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Oscar');
const usuarioActivo2 = getUsuarioActivo2('Keanu');
console.log(usuarioActivo);
console.log(usuarioActivo2);