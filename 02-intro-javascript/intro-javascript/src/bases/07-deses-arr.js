// Desestructuracion Arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [ , , p3 ] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);


const usestate = (valor) => {
  return [valor, () => {console.log('Hola mundo')}]
};

const [nombre, setNombre] = usestate('Camilo');

console.log(nombre, setNombre);
setNombre();
