// Creating post Schema
const { Schema, model } = require('mongoose')

// Setting data types for the post schema
const Post = new Schema({
  title: {
    type: String,
    required: true 
  },
  body: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
  notes: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})

// Exporting "post"
module.exports = model('post', Post)
