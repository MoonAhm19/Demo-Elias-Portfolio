const express = require('express');
const app = express();


const port = process.env.PORT || 3000;
const path = require('path');
const Static_path = path.join(__dirname, "../public")

app.use(express.static(Static_path))

app.get("/", (req, res) => {
    res.send("Welcome to home page")
})


app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})