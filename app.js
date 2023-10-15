const express = require('express')
const bodyParser = require("body-parser")
const addressRoutes = require('./routes/address')
const postRoutes = require('./routes/post')
const {HOST, PORT, API_PATH, DB_HOST, USERNAME, PASSWORD} = require('./variables')
const cors = require('cors')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

app.use(`${API_PATH}/addresses`, addressRoutes)
app.use(`${API_PATH}/posts`, postRoutes)

module.exports = app