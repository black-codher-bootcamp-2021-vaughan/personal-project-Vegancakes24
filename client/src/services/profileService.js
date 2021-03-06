// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const getAllUsers = async () => {
  const response = await axios.get(`/api/users`);
  return response.data || [];
};

const getAllExpenses = async () => {
  const response = await axios.get(`/api/expenses`);
  return response.data || [];
};

const postExpense = async (finalExpense) => {
  const response = await axios.post('/api/expenses', finalExpense);
  return response.data || [];
}

// All of the endpoints in this file can be exported below
export { getAllUsers, getAllExpenses, postExpense};
