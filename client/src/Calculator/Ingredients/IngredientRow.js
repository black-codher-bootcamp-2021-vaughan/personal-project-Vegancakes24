import React from "react";

const IngredientRow = ({element}) => {
    
  const { ingredient, cost, packageSize, quantity, unit, total } = element;
  return (
    <tr>
      <td>{ingredient}</td>
      <td>{cost}</td>
      <td>{packageSize}</td>
      <td>{quantity}</td>
      <td>{unit}</td>
      <td>{total}</td>
    </tr>
  );
};
export default IngredientRow

//