// Template String
const nombre = 'Camilo';
const apellido = 'Castro';

const nombreCompleto = nombre + ' ' + apellido;
const nombreTemplate = `
${nombre} ${apellido}
`;

console.log(nombreCompleto, nombreTemplate);



function getSaludo(nombre, apellido) {
    return 'Hola ' + nombre + ' ' + apellido;
}

console.log(`Este es un saludo de react 
${getSaludo(nombre, apellido)}
`);