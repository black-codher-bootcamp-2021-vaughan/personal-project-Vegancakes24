import React from "react";

const CleaningRow = ({element}) => {
    
  const { cleaning, cost, packageSize, quantity, unit, total } = element;
  return (
    <tr>
      <td>{cleaning}</td>
      <td>{cost}</td>
      <td>{packageSize}</td>
      <td>{quantity}</td>
      <td>{unit}</td>
      <td>{total}</td>
    </tr>
  );
};
export default CleaningRow