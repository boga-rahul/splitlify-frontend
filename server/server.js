const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const PORT = 5000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./dist/splitlify"));

app.get("/**", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/splitlify/index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
