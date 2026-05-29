import express from "express";
const app = express();

app.get("/", (req, res) => { res.send("Hello Test!"); });

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`My first express app - listening on port ${PORT}`);
});