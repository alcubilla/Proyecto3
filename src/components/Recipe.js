import React from "react";

const RecipeCard = props => {
  
return(

<>
<img src={props.recipe.mealNameThumb}/>

    <ul>
    <li>{props.recipe.mealName}</li>
    <li>{props.recipe.mealCategory}</li>
    <li>{props.recipe.instructions}</li>
    <li>{props.recipe.instructions}</li>

</ul> 
  
</> 
);
}

export default RecipeCard;
