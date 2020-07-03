import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class HomeScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        movies: []
      };
    }

    componentWillMount(){
      this.fetchData();
    }

    fetchData () {
      axios.get("http://localhost:8000/api/products").then(response => {
        console.log(response.data);
        this.setState({ movies: response.data })
      }, () => {
        this.onError();
      });
    };

    onError() {
      console.log("do nothign");
    }

    render() {
      return <ul className="products all-movies">
      {
        this.state.movies.map((movie) => 
          <li className="movie-list" key={movie.id}>
            <div className="product">
              <figure>
                  <Link to={`/product/${movie.id}`} className="movie-image"><img className="movie-img" src={movie.image} /></Link>
              </figure>
              <figcaption>
                  <h1><Link to={`/product/${movie.id}`} className="movie-title">{movie.title}</Link></h1>
                  <span className="movie-year">{movie.year}</span>
                  <span className="movie-type">{movie.type}</span>
              </figcaption>
            </div>
          </li>
        )
      }
      
    </ul>
  }
}
export default HomeScreen;