import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';
import './App.css';

const products = [
  { id: 1, name: 'Dom Casmurro'},
  { id: 2, name: 'O Malabarista'},
  { id: 3, name: 'Quase Exemplar'},
  { id: 4, name: '1984'},
  { id: 5, name: 'Fundamentos da Inteligência Artificial'},
  { id: 6, name: 'React 101'}
];

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='*' Component={Header}/>
        <Route exact path='/' element={<ProductList products={products}/>} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </Router>
  );
}

export default App;
