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
// because we must say to our app.js
// hey: I want you to be ready to receive info thru a post
app.use(express.json())
// we capture the object in our controller
// returns
//
// {
//   name: 'Leifer',
//   album: 'Album',
//   cover: 'http://tttt.com',
//   artist: { name: 'Leifer', nickname: 'leifermendez', nationality: 'VE' },
//   duration: { start: 1, end: 0 },
//   mediaId: '623af35c023ceb845d00b918'
// }
//
//
//
//
//
//
//
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
	// require what you have in i.e './routes/tracks'
	// require what you have in './routes/?'
	// Concatenate api to what is here
	// once '/tracks' erased from '.routes/tracks'
	// it refers directly to index.js
	// app.use('/api', require('./routes)) invoke index.js
	require('./routes')
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
