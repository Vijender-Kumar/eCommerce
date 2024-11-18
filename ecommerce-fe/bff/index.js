import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  console.log("Here");
  res.send({
    message: "Bitch",
  });
});

app.listen(3000, () => {
  console.log("Listening bitch on port:", port);
});
