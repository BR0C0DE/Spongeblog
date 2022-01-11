//Create User Schema
const { Schema, model } = require('mongoose')

//Setting the data types for the schema
const User = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  bio: {
    type: String,
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'post'
  }]
  // Shows local time
}, { timestamps: true })

// Calling local strategy to mongoose
User.plugin(require('passport-local-mongoose'))

// Exporting "user"
module.exports = model('user', User)
