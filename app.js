const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "../example.env" });

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const server = app.listen(4000, () => console.log("server running"));

app.get("/", (req, res) => {
  res.send(
    "Server working on  " +
      server.address().address +
      ` env variable =  ${process.env.EXAMPLE}`
  );
});
