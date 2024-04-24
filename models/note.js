//models are representation of our data
//create folder + new files
// Schema: we create a structure of properties assosiated with model
// Schema: we create a blueprint for the model so we can export that format to our express server and eventually link it to our routes {CRUD operations}

const mongoose = require("mongoose")

//-------------
const noteSchema = new mongoose.Schema({ 
    title: String,
    body: String
})

const Note = mongoose.model("Note", noteSchema) //note itself and what should follow -directions above

module.exports = Note 


