// Arreglos es una colección de información dentro de una misma variable
// const arreglo = new Array( 100 );
const arreglo = [1, 2, 3, 4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4); // No es tan recomendable usar .push() ya que modifica el arreglo inicial. Es mejor usar el spread operator (...).


let arreglo2 = [...arreglo, 5];
arreglo2 = arreglo2.concat(6,7,8);
// arreglo2.push(5); // .push(), .splice() and array.length mutan el areglo original

// spread operator(...), concat() no mutan el arreglo original

const arreglo3 = arreglo2.map(function(numero) {
    return numero * 5;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
