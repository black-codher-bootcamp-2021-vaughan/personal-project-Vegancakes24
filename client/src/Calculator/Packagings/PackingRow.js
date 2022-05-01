import React from "react";

const PackingRow = ({element}) => {
    
  const { packing, cost, packageSize, quantity, total } = element;
  return (
    <tr>
      <td>{packing}</td>
      <td>{cost}</td>
      <td>{packageSize}</td>
      <td>{quantity}</td>
      <td>{total}</td>
    </tr>
  );
};
export default PackingRow