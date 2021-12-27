import {GET_MOVIES, ADD_MOVIE_FAVORITE, GET_MOVIES_DATAIL, REMOVE_MOVIE} from './constants'

let apiKey = 'f8e07331';


//Traer todas las peliculas getMovies

export function getMovies (titulo) {
 
 return function (dispatch){
   return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
   .then(response => response.json())
   .then(json =>{
     dispatch({
       type: GET_MOVIES,
       payload: json
     })
   })
 }
};


//Traer detalles de las peliculas getMovieDetail

export function  getMovieDetail (id){
  return function(dispatch){
      return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
    .then(response => response.json())
    .then(json => dispatch({ type: GET_MOVIES_DATAIL, movie:json }))
    
  }

 }


//Agregar peliculas favoritas addMovieFavorite

export function addMovieFavorite (payload){
  return{
    type: ADD_MOVIE_FAVORITE,
    payload
  }
}



//Eliminar de favoritas removeMovieFavorite
export function removeMovieFavorite (id){
  return{
    type: REMOVE_MOVIE,
    id
  }
}
