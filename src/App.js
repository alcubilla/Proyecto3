import React from "react";
import RecipesGenerator from "./components/RecipesGenerator";

import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>¿Ya no sabes que cocinar hoy?</h1>
      <h2>¿Ya no quieres repetir las mismas recetas?</h2>
      <h3>Encuentra nuevas ideas para cocinar aquí</h3>
      <RecipesGenerator />
    </div>
  );
}

export default App;
