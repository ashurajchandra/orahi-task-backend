const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
app.use(express.static("./build"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server ${err}`);
    return;
  }
  console.log(`Server is up and running on port: ${port}`);
});
