const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`Server is woring on http://localhost:${process.env.PORT}`);
})