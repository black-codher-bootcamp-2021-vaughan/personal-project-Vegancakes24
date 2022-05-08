import React from "react";

const CleaningForm = ({ addCleaning }) => {
  const [newCleaning, setNewCleaning] = React.useState({
    cleaning: "",
    cost: 0,
    packageSize: 0,
    quantity: 0,
    unit: "grams", 
  });
  
  const updateNewCleaning = (event) => {
    const { name, value } = event.target;
    const updatedCleaning = {
      ...newCleaning,
      [name]: value,
    };
    setNewCleaning(updatedCleaning);
  };
  console.log('newCleaning', newCleaning)
  return (
    <tr>
      <td>
        <input type="text" name="cleaning" id="cleaning" required onChange={updateNewCleaning} />
      </td>
      <td>
        <input type="number" name="cost" id="cost" required onChange={updateNewCleaning} />
      </td>
      <td>
        <input type="text" name="cleaningSize" id="cleaningSize" required onChange={updateNewCleaning} />
      </td>
      <td>
        <input type="number" name="quantity" id="quantity" required onChange={updateNewCleaning}/>
      </td>
      <td>
        <input type="text" name="unit" id="unit" required onChange={updateNewCleaning}/>
      </td>
      <td>
        <button onClick={(event) => addCleaning(newCleaning, event)}>
          Add Cleaning
        </button>
      </td>
    </tr>
  );
};
export default CleaningForm;