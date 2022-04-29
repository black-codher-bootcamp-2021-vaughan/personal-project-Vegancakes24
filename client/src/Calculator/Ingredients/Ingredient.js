import React from "react";


//all things that are between line 11 to the bottom
export const Calculator = () => {
  const [ingredients, setIngredients] = React.useState();
const handleSubmit = (event) => {
    event.preventdefault()
}
  return (
    <div>
      <form action="" method="get" class="form-example">
        <div class="form-example">
          <label for="ingredient">Ingredient: </label>
          <input type="text" name="ingredient" id="ingredient" required />
        </div>
        <div class="form-example">
          <label for="cost">cost: </label>
          <input type="number" name="cost" id="cost" required />
        </div>
        <div class="form-example">
          <label for="quantity">Quantity: </label>
          <input type="number" name="quantity" id="quantity" required />
        </div>
        <div class="form-example">
          <label for="packagesize">packagesize: </label>
          <input type="number" name="packagesize" id="packagesize" required />
        </div>
        <div class="form-example">
          <label for="unit">unit: </label>
          <input type="text" name="unit" id="unit" required />
        </div>
        <div class="form-example">
          <input type="submit" value="Add Ingredient!" />
        </div>
      </form>
    </div>
  );
};
