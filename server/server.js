require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const petRouter = require('./Routes/PetRoute')
const AdoptFormRoute = require('./Routes/AdoptFormRoute')
const AdminRoute = require('./Routes/AdminRoute')
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(petRouter)
app.use('/form', AdoptFormRoute)
app.use('/admin', AdminRoute)

//STATIC FOLDER
app.use(express.static(path.join(__dirname,'../client/build')));

//STATIC ROUTES
app.get("*", function (Request, res){
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("/", (req,res) => {
  res.send("Welcome");
});

// mongoose.connect(process.env.mongooseURL)
  mongoose.connect("mongodb+srv://SushmaSarkar:hp3ALtfb1Z76vngc@mypet.6llbx.mongodb.net/MyPet")
    .then(() => {
        console.log('Connected to DB');
        const PORT = 4000;
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.error(err);
    })
