import React from 'react';
import './App.css';
import CARDS from './assets/cards.json';


function App(): JSX.Element{

  return (
    <div className="App">
      {JSON.stringify(CARDS)};
    </div>
    
  );
}

export default App;
