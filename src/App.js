import React from 'react';
import RecipesGenerator from "./components/RecipesGenerator"

import './App.css';

function App() {
 
  return (
    
    <div className="container">
    <div className="App">
      
        <h1>¿Qué cenamos?</h1>
        <p>¿Cansado de hacer esa misma pregunta?
        </p>
        
        <RecipesGenerator />
     
    </div>
    </div>
  );
}

export default App;
