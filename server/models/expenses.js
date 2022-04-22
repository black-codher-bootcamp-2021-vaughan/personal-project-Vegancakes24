const mongoose = require("mongoose");
const { Schema } = mongoose;

const expenseSchema = new Schema({
  userId: Number,
  ingredients: [
    {
      ingredient: String,
      cost: Number,
      package_Size: Number,
      unit: String,
    },
  ],

  packaging: String,
});

mongoose.model("expenses", expenseSchema);

//   {
//     "ingredient": "Baking Powder",
//     "cost": 1,
//     "packageSize": 160,
//     "unit": "grams"
//   }
// ],
// "packaging": [
//   {
//     "packaging": "cakebox",
//     "cost": 1,
//     "unitsPackage": 1,
//     "priceUnit": 1
//   }
// ],
// "decorations": [
//   {
//     "decoration": "powder",
//     "cost": 1,
//     "unitsPackage": 1,
//     "priceUnit": 1
//   }
// ],
// "cleaning": [
//   {
//     "item": "bleach",
//     "unitsPackage": 1,
//     "priceUnit": 1
//   }
// ],
// "utilities": [
//   {
//     "utilities": "mobilePhone",
//     "cost": 1
//   }
// ],
// "time": [
//   {
//     "mixing": 30,
//     "hourlyRate": 15,
//     "cost": 12,
//     "hours": 1
//   }
// ]
// }
