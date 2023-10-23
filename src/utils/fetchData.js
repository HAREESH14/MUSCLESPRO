
export const exerciseOptions = {
   method: 'GET',
   url: 'https://exercisedb.p.rapidapi.com',
   headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   }
 };



 export const youtubeOptions = {
   method: 'GET',
   headers: {
     'X-RapidAPI-Key':'58daf37e50mshc4f70cd30c31ea3p1963b1jsnafe3e418b0fc' ,
     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
   }
 };


export const fetchData = async (url,options) => {
   const res = await fetch(url,options);
   const data = await res.json();
   return data;
}