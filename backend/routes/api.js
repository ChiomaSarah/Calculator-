require("dotenv").config();
const express = require("express");
const router = express.Router();
const Operation = require("../models/operation");

// fetch history endpoint
router.get("/history", async (req, res) => {
  try {
    const operations = await Operation.find().sort({ _id: -1 }).limit(4);

    return res.status(200).json({
      message: "Request successful. This has been the last 4 operations!",
      data: operations,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// perform arithmetic functions endpoint
router.post("/calculate", async (req, res) => {
  const { arithmeticFunction } = req.body;
  try {
    const result = eval(arithmeticFunction);
    const calculation = new Operation({
      arithmeticFunction: arithmeticFunction,
      result: result,
    });

    await calculation.save();
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(400).json({ error: "Invalid arithmetic operation" });
  }
});

module.exports = router;
