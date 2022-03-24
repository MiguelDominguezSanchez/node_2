// Invoke Express Web  Service Provider
const express = require('express')
// Router function routes management
// comes from express.Router
// Manage routes
const router = express.Router()
// import destructuring from controllers
const { getItems, getItem, createItem } = require('../controllers/tracks')
// http://localhhost/tracks GET, POST, DELETE, PUT

// ***************************************
// ******* Dynamic Approach ***************
// ***************************************
// Little Route GET Method Usage
// Obtain a list of things
// get method
// Dynamic route charging
router.get(
	//  refers tracks
	// name of file is exactly the name of the family routes
	// i.e. if file iis called tracks it's because the route will be tracks
	'/',
	// getItems imported from controllers > tracks
	getItems
	// How do we say to app.js to use this route?
	// making a require of the export
)
// ***************************************
// POST route
// connected directly with the 'createItem' Controller
// which must receive a body
router.post(
	//  refers tracks
	// name of file is exactly the name of the family routes
	// i.e. if file iis called tracks it's because the route will be tracks
	'/',
	// createItem imported from controllers > tracks
	createItem
	// How do we say to app.js to use this route?
	// making a require of the export
)
// ***************************************
// ***************************************

// Export
module.exports = router
