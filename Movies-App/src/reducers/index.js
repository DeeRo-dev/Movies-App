import {GET_MOVIES, ADD_MOVIE_FAVORITE, GET_MOVIES_DATAIL, REMOVE_MOVIE} from '../actions/constants'

//Creamos el estado que va a tener el reducer al principio, 

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {}
};
console.log(initialState);



function rootReducer (state = initialState, action){
  switch(action.type){
    case ADD_MOVIE_FAVORITE: 
      return { 
        ...state,
        moviesFavourites: [...state.moviesFavourites.action.payload]
      }
    case GET_MOVIES: 
      return {
        ...state,
        moviesLoaded: action.payload.Search
    }
    case GET_MOVIES_DATAIL:
      return {  
        ...state,
        movieDetail: action.movie
      } 
    case REMOVE_MOVIE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.id)
      }
    default:
      return state
  }
}


//Exportar el REDUCER

export default rootReducer;