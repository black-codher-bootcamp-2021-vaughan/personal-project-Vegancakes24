import React from "react";
import CleaningRow from "./CleaningRow";
import CleaningForm from "./CleaningForm";

export const Cleanings = ({cleanings, addCleaning, total}) => {
  //ingredients is an array wit the information that we want to render//
  //Set ingredients is a ffunction that we can use to overide the ingredient//
  //Use State is a method from React that allows to rerender the component when set ingredients is called
  //Ingredients adn set ingredients could have any name e.g Rows and setRows
  //Ask user input to add on ingredient
  //As a user I eant to add one ingredient and see the toatl expense for that ingredient
  //As a user I want to be able to to add another ingredient and see the totoatl expense for both of the ingredients added.
  //Ingredients will have abutton to add ingredient//
  // how to calculate the total
  //hwhich steps the users need to do to add an ingredirent//
  return (
    <form> 
      <table>
        <thead>
          <tr>
            <th>Cleaning</th>
            <th>Cost</th>
            <th>Package Size</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <CleaningForm addCleaning={addCleaning} />

          {cleanings &&
            cleanings.map((element, index) => {
              return (
                <CleaningRow
                  element={element}
                  key={element.cleaning + index}
                />
              );
            })}
        </tbody>
      </table>

      <p>
        Total :{" "}
        {total}
      </p>
    </form>
  );
};