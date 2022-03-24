// Mongo Configuration File
// Declare mongoose package constant
const mongoose = require('mongoose')
// Data Base Connection arrow function declared
// MONGO URI Connection to data base from .env
const dbConnect = () => {
	// Declare constant DB_URI
	// refers to process.env.DB_URI
	const DB_URI = process.env.DB_URI
	// mongoose connect to DB_URI
	// invoked from app.js
	mongoose.connect(
		DB_URI,
		{
			// pass config params mongoose handles
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		// returns a callback function
		// receiving an error || response
		(err, res) => {
			// if no error
			if (!err) {
				console.log('*** CONEXIÓN CORRECTA ***')
			}
			// if error
			else {
				console.log('*** ERROR DE CONEXIÓN ***')
			}
		}
	)
}

// Allows import function
module.exports = dbConnect
