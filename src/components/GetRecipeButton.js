import React from "react";

const GetRecipeButton = props => {
    
      return(
        <div className="App">
        
        <button type="button" className="btn btn-secondary" onClick={props.doAction}>OBTENER RECETA</button>
        </div>

      );



        // const recipes = this.state.data.map((recipe, idx) => (
        //   <Recipe info={recipe} key={idx} />
        // ));
    
    
        // return (
        //   <>
        
        //     <button onClick={this.addHandler} className="btn btn-primary m-2">OBTENER RECETA</button>
           
        //     {recipes}
        //   </>
        // );
      

   



}

export default GetRecipeButton;

