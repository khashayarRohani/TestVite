import express, { response } from "express";

const app = express();
app.get("/", function (request, response) {
  response.send("Hi there is the root of get");
});

app.get("/khash", function (request, response) {
  const data = {
    name: "Jez",
    age: "unknown",
    handsome: true,
    bestFriend: true,
    hair: "sort of",
  };
  response.json(data);
});
app.get("/messages", function (req, res) {
  res.json({ message: "Hello, World!" });
});

app.post("/messages", (req, res) => {
  res.json({ message: "Hello, World!" });
});
app.post("/maz", function (request, response) {
  response.json("This is the POST endpoint for /Maz");
});
app.use(express.json());
app.listen(7782, function () {
  console.log("App is running on port 7782");
});
