const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const db_connect = require('./db')

// Server
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// DB
const db = db_connect.connect({useNewUrlParser: true})

// Charts
const Chart = require('../models/chart')

// -- Create Charts
app.post('/add_chart', (req, res) => {
  const db = req.db
  const title = req.body.title
  const url = req.body.charturl
  const new_chart = new Chart({
    title: title,
    charturl: url
  })

  new_chart.save(function (error) {
    if (error) {
      console.error(error)
    } else {
      res.send({
        success: true,
        message: 'Chart added!'
      })
    }
  })
})

// -- Retrieve All Charts
app.get('/charts', (req, res) => {
  Chart.find({}, 'title charturl', function (error, charts) {
    if (error) console.error(error)
    res.send({
      chartList: charts
    })
  }).sort({_id:-1})
})

app.listen(process.env.PORT || 8081)