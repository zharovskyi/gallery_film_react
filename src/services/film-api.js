import axios from 'axios';

const URL = "https://api.themoviedb.org/3/";
const KEY = "?api_key=667e6c0579f71e858d539ca597385526&language=en-US&page1";
export const FilmsAxiosApi = (page) => {
    return axios.get(URL + page + KEY);
}




// const KEY = "667e6c0579f71e858d539ca597385526";
// const URL = `https://api.themoviedb.org/3`;

// example query 
// https://api.themoviedb.org/3/movie/popular?api_key=667e6c0579f71e858d539ca597385526&language=en-US&page1