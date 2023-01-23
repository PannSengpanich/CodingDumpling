import express from "express";

const app = express();
const port = 3000;

app.get("/", (reg, res) => {
  res.send("hello World!");
});

app.get("/query", (req, res) => {
  res.json({
    query: req.query,
  });
});

app.get("/post/:id", (req, res) => {
  res.json({
    param: req.params,
  });
});



app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
