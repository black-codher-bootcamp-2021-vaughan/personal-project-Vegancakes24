const mongoose = require("mongoose");
const User = mongoose.model("users");
const Expenses = mongoose.model("expenses");

const profileRoutes = (app) => {
  app.get(`/api/users`, async (req, res) => {
    const users = await User.find();

    return res.status(200).send(users);
  });

  app.get(`/api/expenses`, async (req, res) => {
    const expenses = await Expenses.find();

    return res.status(200).send(expenses);
  });

  app.post(`/api/expenses`, async (req, res) => {
    const expense = await Expenses.create(req.body);

    return res.status(201).send({
      error: false,
      expense,
    });
  });

  app.put(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      profile,
    });
  });

  app.delete(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      profile,
    });
  });
};

module.exports = profileRoutes;
