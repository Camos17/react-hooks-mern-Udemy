// Fetch
const apiKey = '5keAq4OV5Pw95taxf7sbmaHYwR145ieC';

const httpRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


// httpRequest.then( resp => {
//     // console.log(resp);
//     resp.json().then( data => {
//       console.log(data);
//     });
//   }
// )
// .catch();

// Encadenar promesas
httpRequest
  .then( resp => resp.json())
  .then( ({data})  => {
    // console.log(data.images.original.url);
    const { url } = data.images.original;
    console.log(url);

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);