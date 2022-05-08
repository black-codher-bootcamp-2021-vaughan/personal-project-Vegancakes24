import React from "react";

const DecoratingForm = ({ addDecorating }) => {
  const [newDecoratings, setNewDecoratings] = React.useState({
    decorating: "",
    cost: 0,
    packageSize: 0,
    quantity: 0,
    unit: "grams", 
  });
  
  const updateNewDecoratings = (event) => {
    const { name, value } = event.target;
    const updatedDecoratings = {
      ...newDecoratings,
      [name]: value,
    };
    setNewDecoratings(updatedDecoratings);
  };
  console.log('newDecoratings', newDecoratings)
  return (
    <tr>
      <td>
        <input type="text" name="decorating" id="decorating" required onChange={updateNewDecoratings} />
      </td>
      <td>
        <input type="number" name="cost" id="cost" required onChange={updateNewDecoratings} />
      </td>
      <td>
        <input type="text" name="packageSize" id="packageSize" required onChange={updateNewDecoratings} />
      </td>
      <td>
        <input type="number" name="quantity" id="quantity" required onChange={updateNewDecoratings}/>
      </td>
      <td>
        <input type="text" name="unit" id="unit" required onChange={updateNewDecoratings}/>
      </td>
      <td>
        <button onClick={(event) => addDecorating(newDecoratings, event)}>
          Add Decoratings
        </button>
      </td>
    </tr>
  );
};
export default DecoratingForm;