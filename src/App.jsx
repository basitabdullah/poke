import React from 'react';
import PokemonList from './components/PokemonList';

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center my-4">Pokémon Search</h1>
      <PokemonList />
    </div>
  );
};

export default App;
