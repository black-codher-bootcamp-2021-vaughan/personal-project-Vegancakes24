import React from "react";

export const Ingredients = () => {
  const [ingredients, setIngredients] = React.useState([
    {
      ingredient: "Baking Powder",
      cost: 1,
      packageSize: 160,
      quantity: 3,
      unit: "grams",
    },
  ]);
  const handleSubmit = (event) => {
    event.preventdefault();
  };
  const addIngredient = () => {
    const newIngredients = [
      ...ingredients,
      {
        ingredient: "Flour",
        cost: 13,
        packageSize: 170,
        quantity: 55,
        unit: "grams",
      },
    ];
    setIngredients(newIngredients);
  };
  //Ask user input to add on ingredient
  //As a user I eant to add one ingredient and see the toatl expense for that ingredient
  //As a user I want to be able to to add another ingredient and see the totoatl expense for both of the ingredients added.
  //Ingredients will have abutton to add ingredient//
  // how to calculate the total
  //hwhich steps the users need to do to add an ingredirent//

  return (
    <div>
      <h2>Add your ingrdients here</h2>
      <button onClick={addIngredient}>Add New Ingredient</button>
      //ingredients will go here//
      {ingredients.map((element) => {
        return (
          <div>
            <p><b>{element.ingredient}</b></p>
            <p>{element.cost}</p>
            <p>{element.packageSize}</p>
            <p><span> {element.quantity}</span>
            {element.unit}</p>
          </div>

        );
      })}
      <div>Total</div>
    </div>
  );
};
