import express from "express";
const app = express();
app.get("/", (req, res) => { res.send("Hello World!"); });
const PORT = 8080;
app.listen(PORT, (error) => {
    if (error)
        throw error;
    console.log(`My first express app - listening on port ${PORT}`);
});
