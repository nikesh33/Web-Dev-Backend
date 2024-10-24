const express = require("express");
const app = express();
const port = 3000;

// **** Route Specific Middleware
const route = require("./Routes/route");

app.use('/api', route);

// // loading middleware into the app
// app.use(express.json());

// // middleware - logging,auth,validation
// // app level pe middleware

// const logging = function (req, res, next) {
//   console.log("Logging Kar Raha hoon");
//   next();
// };

// app.use(logging);

// const auth = function (req, res, next) {
//   console.log("Authentication kar raha hoon");
//   next();
//   // console.log("Chalo Ab Sidha Ghar next middleware ko skip kiya to");
// };
// app.use(auth);

// const validation = function (req, res, next) {
//   console.log("validation ho raha hai");
//   next();
// };

// app.use(validation);

// app.get("/", (req, res) => {
//   console.log(req.body);
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
