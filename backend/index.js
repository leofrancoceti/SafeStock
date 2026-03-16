const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando ");
});

app.listen(3001, () => {
  console.log("Servidor corriendo en puerto 3001");
});
