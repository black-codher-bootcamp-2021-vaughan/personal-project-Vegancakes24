const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  user_Id: String,
  name: String,
  email: String,
});

mongoose.model("users", usersSchema);

