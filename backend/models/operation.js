const mongoose = require("mongoose");
const ArithmeticSchema = mongoose.Schema(
  {
    arithmeticFunction: {
      type: String,
      required: true,
    },
    result: Number,
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Operation", ArithmeticSchema);
