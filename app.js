// Allows app to utilize environment variables
require('dotenv').config()
// Creando Aplicación Express
// Declare Express Library
// Express Allows to Leverage Web Service
const express = require('express')
// Incorporate Cors library
// Cors, prevents from CORS error, Browser Cross Origin Error
const cors = require('cors')
// Declare app = express
const app = express()
// App use of Cors
app.use(cors())

//  Define a constant port,
// Wrapped with ENV Environment variable
// process.env.PORT
const port = process.env.PORT || 3000

// App listen established port,
// return log port in console
// First argument the port, second arg the arrow function
app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})
