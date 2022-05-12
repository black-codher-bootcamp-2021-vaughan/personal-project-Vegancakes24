import React, { useEffect } from "react";
import { Ingredients } from "./Ingredients/Ingredients";
import { Packings } from "./Packagings/Packings";
import { Decoratings } from "./Decoratings/Decoratings";
import { Cleanings } from "./Cleanings/Cleanings";
import { postExpense } from "../services/profileService";



export const Calculator = () => {
  const [ingredients, setIngredients] = React.useState([]);

  const [packings, setPackings] = React.useState([]);

  const [decoratings, setDecoratings] = React.useState([]);

  const [cleanings, setCleanings] = React.useState([]);

  const [finalExpense, setFinalExpense] = React.useState({
    ingredients: [],
    packaging: [],
    decorations: [],
    cleaning: [],
  });

  const ingredientsTotal = ingredients.reduce((sum, currentElement) => {
    return sum + currentElement.total;
  }, 0);
  const packingTotal = packings.reduce((sum, currentElement) => {
    return sum + currentElement.total;
  }, 0);
  const decoratingTotal = decoratings.reduce((sum, currentElement) => {
    return sum + currentElement.total;
  }, 0);

  const cleaningTotal = cleanings.reduce((sum, currentElement) => {
    return sum + currentElement.total;
  }, 0);

  useEffect(() => {
    const updatedExpense = {
      ingredients: ingredients,
      packaging: packings,
      decorations: decoratings,
      cleaning: cleanings, 
      total: ingredientsTotal + packingTotal + decoratingTotal + cleaningTotal
    };
    setFinalExpense(updatedExpense);
  }, [ingredients, packings, decoratings, cleanings]);

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

  const addCleaning = (newCleaning, event) => {
    event.preventDefault();
    const newCleanings = [
      ...cleanings,
      {
        ...newCleaning,
        total:
          (newCleaning.cost / newCleaning.cleaningSize) * newCleaning.quantity,
        //  this calculation has changed
      },
    ];
    setCleanings(newCleanings);
  };
  return (
    <div className='calculator'>

      
      <h1>Cake Calculator</h1>
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
        decoratings={decoratings}
        addDecorating={addDecorating}
        total={decoratingTotal}
      />

      <Cleanings
        cleanings={cleanings}
        addCleaning={addCleaning}
        total={cleaningTotal}
      />

      <h1>
        Total
         {ingredientsTotal + packingTotal + decoratingTotal + cleaningTotal}
      </h1>
      <button onClick = {()=> postExpense(finalExpense)}>Save Expense</button>
    </div>
  );
};
