import React from "react";
import IngredientRow from "./IngredientRow";
import IngredientForm from "./IngredientForm";

export const Ingredients = ({ingredients, addIngredient, total}) => {
  //ingredients is an array wit the information that we want to render//
  //Set ingredients is a ffunction that we can use to overide the ingredient//
  //Use State is a method from React that allows to rerender the component when set ingredients is called
  //Ingredients adn set ingredients could have any name e.g Rows and setRows
  //Ask user input to add on ingredient
  //As a user I eant to add one ingredient and see the toatl expense for that ingredient
  //As a user I want to be able to to add another ingredient and see the totoatl expense for both of the ingredients added.
  //Ingredients will have abutton to add ingredient//
  // how to calculate the total
  //hwhich steps the users need to do to add an ingredirent//
  return (
    <form> 
      <table className="ingredient-container">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Cost</th>
            <th>Package Size</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <IngredientForm addIngredient={addIngredient} />

          {ingredients &&
            ingredients.map((element, index) => {
              return (
                <IngredientRow
                  element={element}
                  key={element.ingredient + index}
                />
              );
            })}
        </tbody>
      </table>

      <p>
        Total :{" "}
        {total}
      </p>
    </form>
  );
};
