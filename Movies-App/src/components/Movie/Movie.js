import React,{useState, useEffect} from 'react';
import { connect,useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import{ useParams} from "react-router-dom"
import style from './Movie.module.css';

export default function Movie() {

   const {id} = useParams();
    console.log(id)
   const dispatch = useDispatch()

  useEffect(() =>{
      console.log(id)
     dispatch(getMovieDetail(id))
  }, [dispatch])

      const movie = useSelector((state)=> state.movieDetail)
      console.log(movie)



        return (
            
            <div className={style.content}>
                <div className={style.contentImg}>
                    <img src={movie.Poster} className={style.img}/>
                </div>
                <div className={style.contentDatos}>
                   <h1 className={style.title}>{movie.Title}</h1>
                   <p className={style.p}> Actores: {movie.Actors}</p>
                   <p  className={style.p}>Detalle: {movie.Plot}</p>
                   <p  className={style.p}>Genero: {movie.Genre}</p>
                   <p className={style.p}>Estreno: {movie.Released}</p>
                   <p className={style.p}>{movie.RunTime}</p>
                     </div>
                </div>
               
         
        );
    

        
}


