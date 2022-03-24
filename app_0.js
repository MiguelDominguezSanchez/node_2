// Allows app to utilize environment variables
require('dotenv').config()
// Creando Aplicación Express
// Declare Express Library
// Express Allows to Leverage Web Service
const express = require('express')
// Incorporate Cors library
// Cors, prevents from CORS error, Browser Cross Origin Error
const cors = require('cors')
// imported dbConnect Mongo Connection
const dbConnect = require('./config/mongo')
// Declare app = express
const app = express()
// App use of Cors
app.use(cors())

//  Define a constant port,
// Wrapped with ENV Environment variable
// process.env.PORT
const port = process.env.PORT || 3000

/**
 * Here we invoke the routes
 * */

// app makes use of
// prefix
// localhost:/api/____________
app.use(
	// localhost is all previous to slash '/'
	// api prefix
	'/api',
	// require what you have in './routes/tracks'
	// Concatenate api to what is here
	require('./routes/tracks_0')
	// returns
	/* {

    "data": [
			"hola",
			"mundo"
	]

}
*/
	// from 'routes' dir 'tracks' file
	// http://localhost:3001/api/tracks
	// Routes Family create
	// what too many lines could be
	// can be improved synthesized && automatized in a more professional way
)

// App listen established port,
// return log port in console
// First argument the port, second arg the arrow function
app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})

// Invoke imported Mongo connection function
dbConnect()
