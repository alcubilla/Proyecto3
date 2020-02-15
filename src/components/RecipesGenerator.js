import React, {Component} from "react"
import recipesData from "../recipesData"
import Recipe from "./Recipe"
import GetRecipeButton from "./GetRecipeButton"


class RecipesGenerator extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }; 
    this.imprimir = this.imprimir.bind(this); //poner cada vez que definamos un metodo que use el setState
  }

  imprimir(){
    const recipe = recipesData[Math.floor(Math.random()*recipesData.length)];  
    this.setState({
        data: recipe
      });
     
  }

  render() {
    
    return (
      <>
        <GetRecipeButton doAction={this.imprimir}/>
        <Recipe recipe={this.state.data} />
      </>
    );
  }
}
export default RecipesGenerator;
