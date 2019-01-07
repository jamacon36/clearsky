const mongoose = require('mongoose')

module.exports.connect = function() {
  mongoose.connect('mongodb://localhost:27017/clearsky')
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error'))
  db.once('open', function (callback) {
    console.log('DB Connected')
  })

  return db
}