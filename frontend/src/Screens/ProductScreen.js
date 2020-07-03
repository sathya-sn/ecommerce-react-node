import React, {useState} from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen (props) {
    const [qty, setQty] = useState(1);
    
    const movie = data.products.find(urlId => urlId.id === props.match.params.id);
    
    const handleAddToCart = () => {
        props.history.push(`/cart/${props.match.params.id}?qty=${qty}`)
    }
    
    return (
        <div className="content-details">
            <div>
                <Link to="/">Back to Movies</Link>
            </div>
            <div className="movie-details">
                <div className="details-image">
                    <img className="movie-img" src={movie.image} alt="movieimage"/>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h2>{movie.title}</h2>
                        </li>
                        <li>
                            {movie.year}
                        </li>
                        <li>
                            {movie.type}
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>Price: Rs.{movie.price}</li>
                        <li>status: {movie.status}</li>
                        <li>quantity: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                {console.log(movie.inStock)}
                                {console.log([...Array(movie.inStock).keys()])}
                                {[...Array(movie.inStock).keys()].map(count => 
                                    <option value={count + 1} key={count + 1}>{count + 1}</option>
                                )}
                            </select>
                        </li>
                        <li>
                            {
                                movie.inStock > 0 ? <button onClick={handleAddToCart} className="btn-cart">Add to Cart</button>
                                :
                                <div>Out of Stock</div>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>);
}
export default ProductScreen;