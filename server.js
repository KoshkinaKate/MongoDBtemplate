// npm init -y   - first step
// npm i nodemon express mongoose dotenv cors  --- second step
// change to .json --  "start": "nodemon server.js"
//create server.js

require("dotenv").config() //allows .env

const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const connectToDb = require('./config/connectToDb.js')//this pulls our Mongoose coonection into the application
const Note = require("./models/note");
const notesController = require('./controllers/notesController.js');

const cors = require('cors') //receiving req on cross-origins **

//------------------middleware

app.use(express.json()) //express does not naturally convert our data to json

app.use(cors())


//---------------DATA BASE CONNECTION
//make new folder config
//inside file connectToDb.js

connectToDb() // calling a function/initializes our connectionDB () function

app.get("/", (req, res) => {
    res.send("This is a Landing Page");
  });
//-------------------after creating note.js and schema WE DO ROUTES
//1 - we want to establish CRUD routes for our Notes Model(transfered to notes.Controller)

app.get("/notes", notesController.fetchAllNotes);
// -----------------> GET all Notes - [Read]
app.get("/notes/:id", notesController.fetchNote);
// -----------------> GET a Specific Note by ID - [Read]
app.post("/notes", notesController.createNote);
// -----------------> Create a Notes - [Create / POST]
app.put("/notes/:id", notesController.updateNote);
// -----------------> Update a Specific Note - [Update]
app.delete("/notes/:id", notesController.deleteNote);
// -----------------> Delete a Specific Note - [Delete]
// - - - - - - -- - - - - - - - - - - - - - - - - - - - - - - - -  -






//  mongodb+srv://KateKoshkina:Rakhmatov0-!)@mongopractice.7deheh7.mongodb.net/ 


app.listen(PORT,()=>{
    console.log(`Express Server Listening on port num: ${PORT}`)
})