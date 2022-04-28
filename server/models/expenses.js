const mongoose = require("mongoose");
const { Schema } = mongoose;

const expenseSchema = new Schema({
  userId: Number,
  ingredients: [
    {
      ingredient: String,
      cost: Number,
      package_Size: Number,
      quantity: Number,
      unit: String,
    },
  ],

  packaging: [

  {
    packaging: String,
    cost: Number,
    unitsPackage: Number,
    priceUnit: Number,

   },
  ],

  decorations: [

    {
      decorations: String,
      cost: Number,
      unitsPackage: String,
      priceUnit: Number,
    }
  ],

  cleaning: [

    {
      cleaning: String,
      item: String,
      unitsPackage: Number,
      priceUnit: Number,
    }
  ],

  utilties: [

    {
      utilities: String,
      cost: Number,
    }
  ],

  time: [

    {
      mixing: Number,
      hourlyRate: Number,
      cost: Number,
      hours: Number,
    }
  ],


});

mongoose.model("expenses", expenseSchema);

