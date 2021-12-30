import React, { Component, useState} from "react";
import { connect } from "react-redux";

import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        
          {
          this.props.favorites && this.props.favorites.map (movie =>
            <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                <button>X</button>
            </div>
          )
          }
        
      </div>
    );
  }
}


function mapStateToProps(state){
  console.log(state)
  return{
    favorites: state.moviesFavourites
  }
}
export default connect(mapStateToProps)(ConnectedList);
