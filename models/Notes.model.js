const mongoose = require("mongoose")


const notesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    author: {type: String, required: true},
    content:{type: String, required: true},
    image:{type:String},
    userId: {type: String, required: true}
})

const NotesModel = mongoose.model("todo", notesSchema)


module.exports = NotesModel

