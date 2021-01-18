export const getGifs=async(category)=> {
        
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}+and+Morty&limit=10&api_key=3554KENf7aRqwoYylCuQSpjfGFA9liT1`;
    const resp=await fetch(url)
    const {data}=await resp.json();
   // console.log(data);

    const gifs=data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    });

   // console.log(gifs);
  //  setImages(gifs);

  return gifs;
    
}