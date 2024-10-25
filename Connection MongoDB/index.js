const express = require("express");
const app = express();
const connectDB = require("./db");
const users = require("./Routes/users");
const PORT = 3000;

//body parser
app.use(express.json());
//connect to database
connectDB();

app.use("/api", users);

// -> /api/users

app.get("/api", (req, res) => {
  console.log("I am Inside home route handler");
  res.send("Hello Jee Welcome To DB World");
});

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
