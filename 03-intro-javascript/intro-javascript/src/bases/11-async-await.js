// 1. sin simplificar
// const getImagePromesa = () => {
//   const promesa = new Promise((resolve, reject) => {
//     resolve('htttp://asdasdas.com');
//   });
//   return promesa;
// };

// 2. simplificada
// const getImagePromesa = () => 
//     new Promise( resolve => resolve('htttp://asdasdas.com'));

// getImagePromesa()
//   .then(console.log);


// 3. Async -await -- asincrona
const getImagen = async () => {  
    try {
      const apiKey = '5keAq4OV5Pw95taxf7sbmaHYwR145ieC';
      const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
      const { data } = await resp.json();
      const { url } = data.images.original;
  
      const img = document.createElement('img');
      img.src = url;
  
      document.body.append(img);
    } catch (error) {
      // manejo error
      console.warn(error);
    }
  };
  
  getImagen();
  