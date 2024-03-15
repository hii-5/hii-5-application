const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.end("welcome to hii-five server")
})
app.listen(port, () => {
    console.log("hii-five server is running successfully ");
});