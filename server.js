const express = require("express");
const mongo = require(".\\Mongo.js");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

app.post("/", async (req, res) => {
    const collName = "MPK-pojazdy";
    const data = req.body;

    let exists = await mongo.dbInsertOne(data, collName);
    if (exists) res.send(JSON.stringify({ status: 1, message: "Data acknowledged succesfully." }));
    else res.send(JSON.stringify({ status: -1, message: "Error: data not acknowledged. Try again." }));
})

app.listen(port, () => {
    console.clear();
    console.log(`Server running on port ${port}`);
})