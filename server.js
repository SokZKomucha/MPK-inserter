// Wymagane moduły:
// - mongodb - w celu łączenia z bazą danych i wstawiania danych
// - express - w celu hostowania serwera
// - cors - by Firefox nie płakał
const mongoClient = require("mongodb").MongoClient;
const express = require("express");
const cors = require("cors");

// Stałe
// url - adres używanej bazy MongoDB
// dbName - nazwa bazy danych, którą chcemy modyfikować
// collName - nazwa kolekcji w bazie, którą chcemy modyfikować
// port - port serwera, używany na stronie 
const url = "mongodb://127.0.0.1:27017";
const dbName = "testDatabase";
const collName = "MPK-pojazdy";
const port = 3000;

// Stałe
// client - klient MongoDB
// app - serwer express
const client = new mongoClient(url);
const app = express();

// Aplikuje cors'a, by Firefox nie płakał
// Aplikuje express.json() by można przetwarzać dane
app.use(cors())
app.use(express.json());



// Funkcja służąca do łączenia się z bazą danych dbName
// Zwraca kolekcję collName
async function dbConnect(dbName, collName) {
    let connection = await client.connect();
    db = connection.db(dbName);
    return collection = db.collection(collName)
}

// Funkcja służąca do insertowania jednej pozycji w bazie danych
// Zwraca wynik operacji
async function dbInsertOne(filterData) {
    let data = await dbConnect(dbName, collName);
    result = await data.insertOne(filterData);
    client.close();
    return result;
}



// "Event listener" "triggerujący" się gdy jakikolwiek klient 
// próbuje wysłać coś na serwer
// W tym wypadku spodziewamy się objektu z informacjami, które
// potem "wrzucamy" do bazy danych
app.post("/", async (req, res) => {
    let exists = await dbInsertOne(req.body);
    if (exists) res.send(JSON.stringify({ status: 1, message: "Data acknowledged succesfully" }));
    else res.send(JSON.stringify({ status: -1, message: "Error, data not acknowledged" }));
})

// Umożliwia działanie aplikacji
app.listen(port, () => {
    console.clear();
    console.log(`Server running on port ${port}`);
})