import React from "react";
import { Ingredients } from "./Ingredients/Ingredients";
import { Packings } from "./Packagings/Packings";
import { Decoratings } from "./Decoratings/Decoratings";

export const Calculator = () => {
  const [ingredients, setIngredients] = React.useState([]);

  const [packings, setPackings] = React.useState([]);

  const [decoratings, setDecoratings] = React.useState([
   
  ]);

  const ingredientsTotal = ingredients.reduce((sum, currentElement) => {
    return sum + currentElement.total;
  }, 0);
  const packingTotal = packings.reduce((sum, currentElement) => {
    return sum + currentElement.total;
  }, 0);
  const decoratingTotal = decoratings.reduce((sum, currentElement) => {
    return sum + currentElement.total;
  }, 0);

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
    event.preventDefault();
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

  const addDecorating = (newDecorating, event) => {
    event.preventDefault();
    const newDecoratings = [
      ...decoratings,
      {
        ...newDecorating,
        total:
          (newDecorating.cost / newDecorating.packageSize) *
          newDecorating.quantity,
        //  this calculation has changed
      },
    ];
    setDecoratings(newDecoratings);
  };

  return (
    <div>
      <Ingredients
        ingredients={ingredients}
        addIngredient={addIngredient}
        total={ingredientsTotal}
      />

      <Packings
        packings={packings}
        addPacking={addPacking}
        total={packingTotal}
      />

      <Decoratings
        decoratingss={decoratings}
        addDecorating={addDecorating}
        total={decoratingTotal}
      />

      <h1>
        Total
        {ingredientsTotal + packingTotal + decoratingTotal}
      </h1>
    </div>
  );
};
