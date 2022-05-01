import React from "react";
import { Ingredients } from "./Ingredients/Ingredients";
import { Packings } from "./Packagings/Packings";

export const Calculator = () => {
  const [ingredients, setIngredients] = React.useState([
    {
      ingredient: "Baking Powder",
      cost: 1,
      packageSize: 160,
      quantity: 3,
      unit: "grams",
      total: 0.3,
    },
  ]);

  const [packings, setPackings] = React.useState([
    {
      packing: "Cake Board",
      cost: 1,
      packageSize: 1,
      quantity: 1,
      total: 0.3,
    },
  ]);
  const ingredientsTotal = ingredients.reduce((sum, currentElement) => {
    return sum + currentElement.total;
  }, 0);
const packingTotal = packings.reduce((sum, currentElement) => {
    return sum + currentElement.total;
  }, 0)

  const addIngredient = (newIngredient, event) => {
    event.preventDefault();
    const newIngredients = [
      ...ingredients,
      {
        ...newIngredient,
        total:
          (newIngredient.cost / newIngredient.packageSize) *
          newIngredient.quantity,
      },
    ];
    setIngredients(newIngredients);
  };

  const addPacking = (newPacking, event) => {
    event.preventDefault()
    const newPackings = [
      ...packings,
      {
        ...newPacking,
        total: (newPacking.cost / newPacking.packageSize) * newPacking.quantity,
        //  this calculation has changed
      },
    ];
    setPackings(newPackings);
  };


  return (
    <div>
      <Ingredients ingredients={ingredients} addIngredient={addIngredient} total={ingredientsTotal}/>

      <Packings packings={packings} addPacking={addPacking} total={packingTotal}/>

      <h1>Total
          {ingredientsTotal + packingTotal}
      </h1>

    </div>
  );
};
