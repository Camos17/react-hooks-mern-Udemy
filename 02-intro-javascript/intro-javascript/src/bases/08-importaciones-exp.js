
// Importaciones
import heroes, { owners } from "../data/heroes";

// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes'

// console.log(heroes, owners);

// const getHeroByID = (id) => {
//   return heroes.find((hero) => {
//     return hero.id === id
//   });
// };

export const getHeroByID = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroByID(2));


export const getHeroesByOwner = (owner) => {
  return heroes.filter((hero) => hero.owner === owner);
};

// console.log(getHeroesByOwner('Marvel'));