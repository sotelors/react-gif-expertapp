


 export const getGifs = async( category ) =>{

    const url =
    `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=11&api_key=2PYDCHgJsuohSpouuuzKCLVgAZzhEWml`;
    //   "https://api.giphy.com/v1/gifs/search?q=One+Punch&limit=10&api_key=2PYDCHgJsuohSpouuuzKCLVgAZzhEWml";
      const resp = await fetch( url);
      const {data} = await resp.json();
      

      const gifs = data.map( img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
                
            }
      } )
      
      //console.log(gifs);
      //setImages( gifs )

      return gifs;

}