require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./database");
const apiRouter = require("./routes/api");

const app = express();
app.use(express.json());
app.use(cors("*"));
app.use("/", apiRouter);

app.use(express.urlencoded({ extended: true }));

app.get("/api/", (req, res) => {
  res.json({ "API success": true });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log("Great! Server listening on port :: " + PORT);
});
