import React, { useState, useEffect } from "react";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllExpenses } from "./services/profileService";

function Expenses() {
  const [expenses, setExpenses]= useState(null);

  useEffect(() => {
    async function getExpenses() {
      if (!expenses) {
        const response = await getAllExpenses();
        setExpenses(response);
      }
    }

    getExpenses();
  }, [expenses]);

  const renderExpense = (expense) => {
    return (
      <li key={expense._id}>
        {expense.total}
      </li>
    );
  };

  return (
    <div>
      <ul>
        {expenses && expenses.length > 0 ? (
          expenses.map((profile) => renderExpense(profile))
        ) : (
          <p>No profiles found</p>
        )}
      </ul>
    </div>
  );
}

export default Expenses;