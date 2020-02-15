import React from "react";
import RecipesGenerator from "./components/RecipesGenerator";

import "./App.css";

function App() {
  return (
    <div className="container">
    
        <h2> ¿Ya no sabes que cocinar hoy?</h2>
        <h3>¿Ya no quieren repetir las mismas recetas? </h3>
        <p> Encuentra nuevas ideas para cocinar con aquí</p>
       
     
      <RecipesGenerator />
    </div>
  );
}

export default App;
