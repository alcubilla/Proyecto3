import React from "react";

const GetRecipeButton = props => {
  return (
    <div className="App"> 
    <button type="button" className="btn btn-secondary" onClick={props.doAction}>OBTENER RECETA</button>
    </div>
  );
}

export default GetRecipeButton;


