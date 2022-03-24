// Invoke Express Web  Service Provider
const express = require('express')
// Router function routes management
// comes from express.Router
// Manage routes
const router = express.Router()

// http://localhhost/tracks GET, POST, DELETE, PUT

// ***************************************
// ******* Static Approach ***************
// ***************************************
// Little Route GET Method Usage
// Obtain a list of things
// get method
// Dynamic route charging
router.get(
	//  refers tracks
	// name of file is exactly the name of the family routes
	// i.e. if file iis called tracks it's because the route will be tracks
	'/tracks',
	// callback function
	// two args, express offered methods
	// req, res
	// what is the request || response request
	(req, res) => {
		// constant array called data
		const data = ['hola', 'mundo']
		// when sb visit '/tracks'
		// response 'Hola Mundo'
		res.send(
			// open 'data' with its value 'data'
			// { data: data }
			// if there is key & value
			// can be a clean single word
			{ data }
		)
	}
	// How do we say to app.js to use this route?
	// making a require of the export
)
// ***************************************
// ******* Static Approach ***************
// ***************************************

// Export
module.exports = router
