// Condicionla ternario
const activo = true;

// let mensaje = '';

// if (activo) {
//   mensaje = 'Activo'
// } else {
//   mensaje = 'Inactivo'
// }

// mensaje = (activo) ? 'Activo' : 'Inactivo';

const mensaje = !activo && 'Activo';

console.log(mensaje);