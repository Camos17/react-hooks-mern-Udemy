
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New YOrk',
        zipCode: 55447884,
        lat: 14.325668,
        lng: 34.977877
    }
};


// const persona2 = persona; // Esto es algo que no se deba hacer, se esta realizando una asiganción del eapcio en memoria, no una copia del objeto.! 

// Se debe crear un objeto para usar un nuevo espacio de memoria y no modificar el obejto 'original'.
const persona2 = {
    ...persona
}
persona2.nombre = 'Peter';
// console.table({persona});

console.log(persona);
console.log(persona2);
