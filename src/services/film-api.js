import axios from 'axios';

const URL = "https://api.themoviedb.org/3";
const KEY = "550?api_key=667e6c0579f71e858d539ca597385526";
export const FilmsAxiosApi = (page) => {
    return axios.get(URL + page + KEY);
}




// const KEY = "667e6c0579f71e858d539ca597385526";
// const URL = `https://api.themoviedb.org/3`;

// example query 
// https://api.themoviedb.org/3/tv/550?api_key=667e6c0579f71e858d539ca597385526