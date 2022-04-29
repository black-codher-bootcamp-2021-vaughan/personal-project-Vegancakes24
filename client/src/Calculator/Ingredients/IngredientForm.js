import React from "react";

const IngredientForm = ({ addIngredient }) => {
  const [newIngredient, setNewIngredient] = React.useState({
    ingredient: "",
    cost: 0,
    packageSize: 0,
    quantity: 0,
    unit: "grams", 
  });
  
  const updateNewIngredient = (event) => {
    const { name, value } = event.target;
    const updatedIngredient = {
      ...newIngredient,
      [name]: value,
    };
    setNewIngredient(updatedIngredient);
  };
  console.log('newIngredient', newIngredient)
  return (
    <tr>
      <td>
        <input type="text" name="ingredient" id="ingredient" required onChange={updateNewIngredient} />
      </td>
      <td>
        <input type="number" name="cost" id="cost" required onChange={updateNewIngredient} />
      </td>
      <td>
        <input type="text" name="packageSize" id="packageSize" required onChange={updateNewIngredient} />
      </td>
      <td>
        <input type="number" name="quantity" id="quantity" required onChange={updateNewIngredient}/>
      </td>
      <td>
        <input type="text" name="unit" id="unit" required onChange={updateNewIngredient}/>
      </td>
      <td>
        <button onClick={() => addIngredient(newIngredient)}>
          Add Ingredient
        </button>
      </td>
    </tr>
  );
};
export default IngredientForm;

//update elements that need onchange adding
// create folder for pacakinging and import into index.js
