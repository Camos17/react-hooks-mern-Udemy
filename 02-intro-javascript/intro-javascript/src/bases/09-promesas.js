import { getHeroByID } from "./bases/08-importaciones-exp";

// Promesas
// Por naturalrez son asincronas, caen la pila de trabajo de JS
// se crean con un argumento función callback.
// Pare evaluar la promesa existen 3 metdos mas usados: resolve() - para resolver la promesa, reject() - Manejo de las excepciones, finally() - Se ejecuta después del resolve y reject
// const promesa = new Promise((resolve, reject) => {
  
//   setTimeout(() => {
//     // console.log('2 segundos después');

//     const hereo = getHeroByID(2);
//     console.log(hereo);
//     resolve(hereo);
//     // reject('No se pudo encontrar el héroe.');
//   }, 2000);

// });

// promesa.then((heroe) => {
//   console.log('Then de la promesa', heroe);
// })
// .catch(error => console.warn(error));


const getHeroByIdAsync = (heroId) => {


  return new Promise((resolve, reject) => {
  
    setTimeout(() => {
      // console.log('2 segundos después');
  
      const heroe = getHeroByID(heroId);
      // console.log(hereo);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el héroe.');
      }
    }, 2000);
  
  });

};


getHeroByIdAsync(2)
  // .then( heroe => console.log(heroe))
  .then(console.log)
  // .catch(err => console.warn(err));
  .catch(console.warn);