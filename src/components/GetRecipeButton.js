import React from "react";

const GetRecipeButton = props => {
    
      return(
        <>
        <button onClick={props.doAction}>Click me</button>
        </>

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

