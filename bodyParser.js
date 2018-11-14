let express = require('express')
var bodyParser = require('body-parser')
let app = express()
let url = require('url')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// respond when a GET request is made to the homepage
// use a response to send things back
// GET method route
app.get('/', function (request, response) {
    console.log(url.parse(request.url,true).query)
    console.log("name: " + request.query.name)
    console.log("age: " + request.query.age)
  response.send('This is a deployed version of node application deployed in heroku')
})

// POST method route
app.post('/', function (request, response) {
  console.log(request.body)
  response.send('POST request to the homepage\n')
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on ${PORT}`))

