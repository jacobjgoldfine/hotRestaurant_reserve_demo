// Initialization
//      Imports
const express = require('express');
const path = require('path');

//      Express Config
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
let tables = []; // Container for Reservations to fill
let waitList = []; // Overflow container for reservations

// Routes
//      Get Homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './dist/index.html')));

//      Get Tables
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, './dist/table.html')));

//      Get Reserve
app.get('/reservation', (req, res) => res.sendFile(path.join(__dirname, './dist/reserve.html')));

//      API Routes
//              Tables
app.get('/api/tables', (req, res) => res.json(tables));

//              Waitlist
app.get('/api/waitlist', (req, res) => res.json(waitList));

//      Post to Tables
app.post('/api/reserve', (req, res) => {

    const newReservation = req.body;
  
    if (tables.length < 5) {
        tables.push(newReservation);
        res.status(200);
    } else {
        waitList.push(newReservation);
        res.status(201);
    }
    console.log(tables);
    res.json(newReservation);
  });

// Listen
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));