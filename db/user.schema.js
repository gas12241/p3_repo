const Schema = require("mongoose").Schema;

exports.UserSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    password: String,
  },
  { collection: "user" }
);