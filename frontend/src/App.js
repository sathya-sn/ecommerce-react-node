import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <header className="header">
            <div className="brand">
              <Link to="/">S Cart</Link>
            </div>
            <div className="header-links">
              <a href="cart.html">My cart</a>
              <a href="signin.html">Sign In</a>
            </div>
          </header>
          <section className="movie-app">
            <main className="content">
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
            </main>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
