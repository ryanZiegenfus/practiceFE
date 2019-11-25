import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Feed} />
      <Route path='/signup' component={Form} />
    </div>
  );
}

export default App;
