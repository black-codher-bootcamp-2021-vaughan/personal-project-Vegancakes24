const mongoose = require("mongoose");
const { Schema } = mongoose;

const expenseSchema = new Schema({
  userId: Number,
  total: Number,
  ingredients: [
    {
      ingredient: String,
      cost: Number,
      packageSize: Number,
      quantity: Number,
      unit: String,
    },
  ],

  packaging: [
    {
      packing: String,
      cost: Number,
      quantity: Number,
      packageSize: Number,
    },
  ],

  decorations: [
    {
      decorating: String,
      cost: Number,
      packageSize: Number,
      quantity: Number,
      unit: String,
    },
  ],

  cleaning: [
    {
      cleaning: String,
      cost: Number,
      packageSize: Number,
      quantity: Number,
      unit: String,
    },
  ],

  utilties: [
    {
      utilities: String,
      cost: Number,
    },
  ],

  time: [
    {
      mixing: Number,
      hourlyRate: Number,
      cost: Number,
      hours: Number,
    },
  ],
});

mongoose.model("expenses", expenseSchema);
