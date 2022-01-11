// Creating note Schema
const { Schema, model } = require('mongoose')

// Setting data types for the post schema
const Note = new Schema({
  body: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'post',
    required: true
  }
})

// Exporting "note"
module.exports = model('note', Note)
