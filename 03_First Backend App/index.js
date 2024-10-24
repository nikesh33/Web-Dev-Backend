// Including express module and initialising an app
const express = require("express");
const app = express();

// variable that stores the port number
const port = 3000;

// Routing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start Your Server or App
app.listen(port, () => {
  console.log(`Application Start Ho Chuka hai Port Number ${port} Pe`);
});
