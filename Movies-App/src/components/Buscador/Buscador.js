import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies } from "../../actions";
import style from './Buscador.module.css';
import StarsIcon from '@material-ui/icons/Stars';




export class Buscador extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    console.log(this.state)
    this.setState({title:''})
  }

  render() {
    const { title } = this.state;
    return (
      <div>
    
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div className={style.contentSearch}>
            <div className={style.search}>
                <label className={style.label} htmlFor="title">Buscar una película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
             <button type="submit">Search</button>
            </div>
          
          </div>
         
        </form>
       
         {
           this.props.movies && this.props.movies.map(movie => 
           
            <div className={style.contentCard}>
              <div className={style.contentBtn}> <StarsIcon className={style.icon}/></div>
              <div className={style.contentTitle}>
                <Link to='/movie/' >
                 <h4>
                   {movie.Title}
                </h4>
                </Link>
                
              </div>
               
           
            </div>
          
            )
         }
        
      </div>
    );
  }
}



  function mapStateToProps(state) {
      return {
        movies: state.moviesLoaded
      };
    }

function mapDispatchToProps(dispatch) {
  return {
    //addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

    export default connect(
      mapStateToProps,
      mapDispatchToProps
    )(Buscador);

/*function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
*/