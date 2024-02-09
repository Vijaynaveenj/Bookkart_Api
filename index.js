const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Cors = require("cors");
require("dotenv").config();
const path = require("path");

// MongoDB Connection
const { connectToDatabase } = require("./MongoDb");
const { MongoDBclient } = require("./MongoDb");

const user = MongoDBclient.db("demo").collection("user");

//Body Parser
app.use(bodyParser.json());

// Statics
app.use(express.static("src"));

//Cors
app.use(Cors({ origin: true, credentials: true }));

// Database Connection
connectToDatabase();

// Welcome Message
app.get("/", (req, res) => {
  res.send("Hello All Welcome Revature");
});

app.get("/user", async (req, res) => {
  try {
    const result = await user.insertOne({
      email: "demo@gmail.com",
      password: 123456789,
      first_name: "Revature",
      last_name: "Company",
      number: "0987654321",
      last_seen: new Date(),
      status: "Active",
      created: new Date(),
      modified: new Date(),
    });
    console.log(result);
    return result;
  } catch (err) {
    return err;
  }
});
app.get("/userData", async (req, res) => {
  try {
    const result = await user.find().toArray();
    res.send(result);
    return result;
  } catch (err) {
    return err;
  }
});

app.listen(2030, () => {
  console.log(`Server Running in Port http://localhost:2030`);
});
