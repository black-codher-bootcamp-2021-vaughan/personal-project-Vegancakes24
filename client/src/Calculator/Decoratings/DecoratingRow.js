import React from "react";

const DecoratingRow = ({element}) => {
    
  const { decorating, cost, packageSize, quantity, unit, total } = element;
  return (
    <tr>
      <td>{decorating}</td>
      <td>{cost}</td>
      <td>{packageSize}</td>
      <td>{quantity}</td>
      <td>{unit}</td>
      <td>{total}</td>
    </tr>
  );
};
export default DecoratingRow
