import React from "react";

import ReactPlayer from "react-player"


const RecipeCard = props => {
    return (
        <>
            <img src={props.recipe.mealNameThumb} className="rounded-circle" />
            <h4 className="text-secondary">{props.recipe.mealName} </h4>
            <p className="text-left">{props.recipe.instructions} </p>
            <div className="list">
                <ul><h5></h5>
                    <li>{props.recipe.measure1} {props.recipe.ingredient1}</li>
                    <li>{props.recipe.measure2} {props.recipe.ingredient2}</li>
                    <li>{props.recipe.measure3} {props.recipe.ingredient3}</li>
                    <li>{props.recipe.measure4} {props.recipe.ingredient4}</li>
                    <li>{props.recipe.measure5} {props.recipe.ingredient5}</li>
                    <li>{props.recipe.measure6} {props.recipe.ingredient6}</li>
                    <li>{props.recipe.measure7} {props.recipe.ingredient7}</li>
                    <li>{props.recipe.measure8} {props.recipe.ingredient8}</li>
                    <li>{props.recipe.measure9} {props.recipe.ingredient9}</li>
                    <li>{props.recipe.measure10} {props.recipe.ingredient10}</li>
                    <li>{props.recipe.measure11} {props.recipe.ingredient11}</li>
                    <li>{props.recipe.measure12} {props.recipe.ingredient12}</li>
                    <li>{props.recipe.measure13} {props.recipe.ingredient13}</li>
                    <li>{props.recipe.measure14} {props.recipe.ingredient14}</li>
                    <li>{props.recipe.measure15} {props.recipe.ingredient15}</li>
                    <li>{props.recipe.measure16} {props.recipe.ingredient16}</li>
                    <li>{props.recipe.measure17} {props.recipe.ingredient17}</li>
                    <li>{props.recipe.measure18} {props.recipe.ingredient18}</li>
                    <li>{props.recipe.measure19} {props.recipe.ingredient19}</li>
                    <li>{props.recipe.measure20} {props.recipe.ingredient20}</li>
                </ul>
            </div>
            <ReactPlayer
                className='react-player'
                url={props.recipe.mealVideo}
                playing
                width='100%'
                height='100%'
            />
        </>
    );
}

export default RecipeCard;
