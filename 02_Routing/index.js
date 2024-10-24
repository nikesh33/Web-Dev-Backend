const express = require("express");
const app = express();
const path = require("path");
// importing item ki router file
const item = require("./Routes/item");
const bird = require("./Routes/bird");
const port = 3000;

app.use("/api", item);
app.use("/filler", bird);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
