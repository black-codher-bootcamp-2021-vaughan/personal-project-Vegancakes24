import React from "react";

const PackingForm = ({ addPacking }) => {
  const [newPacking, setNewPacking] = React.useState({
    packing: "",
    cost: 0,
    quantity: 0,
    packageSize: 0,
  });

  const updateNewPacking = (event) => {
    const { name, value } = event.target;
    const updatedPacking = {
      ...newPacking,
      [name]: value,
    };
    setNewPacking(updatedPacking);
  };
  console.log("newPacking", newPacking);
  return (
    <tr>
      <td>
        <input
          type="text"
          name="packing"
          id="packing"
          required
          onChange={updateNewPacking}
        />
      </td>
      <td>
        <input
          type="number"
          step={0.01}
          name="cost"
          id="cost"
          required
          onChange={updateNewPacking}
        />
      </td>
      <td>
        <input
          type="text"
          name="packageSize"
          id="packageSize"
          required
          onChange={updateNewPacking}
        />
      </td>
      <td>
        <input
          type="text"
          name="quantity"
          id="quantity"
          required
          onChange={updateNewPacking}
        />
      </td>
      <td>
        <button onClick={(event) => addPacking(newPacking, event)}>
          Add Packaging
        </button>
      </td>
    </tr>
  );
};
export default PackingForm;

//update elements that need onchange adding
// create folder for pacakinging and import into index.js
