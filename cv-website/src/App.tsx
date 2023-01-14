import React from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const pokeDB = () => {
    Axios.post('http://localost:3001/api/poke', {foo: "bar"});
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={pokeDB}>Poke database</button>
    </div>
  );
}

export default App;
