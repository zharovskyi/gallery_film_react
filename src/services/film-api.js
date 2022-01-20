
function fetchMovies(name) {
    return fetch(`https://api.themoviedb.org/3/${name}/popular?api_key=667e6c0579f71e858d539ca597385526&language=en-US&page1`).then(response => {
      if (response.ok) {
        return response.json();
      }
  
      return Promise.reject(new Error(`No films ${name}`));
    });
  }
  
  const api = {
    fetchMovies,
  };
  
  export default api;
  