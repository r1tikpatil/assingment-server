const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    employeeId: {
      type: String,
      require: true,
    },
    designation: {
      type: String,
      require: true,
    },
    organization: {
      type: String,
      require: true,
    },
    toe: {
      type: String,
      require: true,
    },
    dob: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    pic: {
      type: String,
    },
    age: {
      // type: Integer,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
