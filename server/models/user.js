const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  fistName: String,
  lastName: String,
  email: String,
  passwordHash: String,
  charts: Array,
  updated: Timestamp
})

const User = mongoose.model('User', UserSchema)

module.exports = User