require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(routes)

app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT)
})