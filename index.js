const express = require("express");
const db = require("./config/mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");

const port = 5000;
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

app.use("/", require("./routes/user"));

app.listen(port, () => {
  console.log("Server listening on port ", port);
});
