// Desestrucutración
// Asiganación Desestrucutrante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
  };
  
  const { nombre, clave, edad } = persona;
  
  // console.log(nombre);
  // console.log(edad);
  // console.log(clave);
  
  // Argumento sin desestructurar
  const retornaPersona = ( usuario ) => {
  
    const { nombre, edad, clave } = usuario;
  
    console.log(nombre, edad, clave);
  };
  
  // retornaPersona(persona);
  
  
  
  // Argumento desestructurado
  const usecontext = ({ nombre, edad, rango = 'Capitán', clave }) => {
    // console.log(nombre, edad, rango);
    return {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 15.6798,
        lng: -13.4567
      }
    }
  };
  
  const { nombreClave, anios, latlng:{ lat, lng} } = usecontext(persona);
  
  console.log(nombreClave, anios);
  console.log(lat, lng);