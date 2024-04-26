// const express = require("express");
// const app = express();

// app.use(express.json());
// const PORT = process.env.PORT || 8080;

// const myMiddleware = (req, res, next) => {
//   setTimeout(() => {
//     console.log("I am Mr. Middleware");
//     next();
//   }, 3000);
// };
// const myOtherMiddleware = (req, res, next) => {
//   console.log("i am another middleware");
//   next();
// };
// app.use(myOtherMiddleware);
// app.use(myMiddleware);

// app.get("/", (req, res) => {
//   res.send(`Hello ${1 + 1}`);
// });

// const tellMEEverythingWillBeAlright = (req, res, next) => {
//   console.log("Hey, everything will be alright!");
//   next();
// };

// app.get("/somewhere", tellMEEverythingWillBeAlright, (req, res, next) => {
//   res.send("I am somewhere");
// });

// app.listen(PORT, () => {
//   console.log(`running on http://localhost:${PORT}`);
// });
