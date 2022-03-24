// Controller is where it is housed the application's logic
// it is where the user finalizes,
// it is where you are gonna be connected to data base
// it is where you sum, subtract, divide, multiply, etc
//
// CRUD
// Controller POST route
// Controller GET route
// Controller for listing
// Controller for detail
// Controller for updating
// Controller for eliminating
//
// We are gonna create Controller
// that has a proper naming for this type of functions
//
// GET ITEMS
// referring to call things, items,
// obtain tracks list
// etc,...
//
////////////////////////////////////
// in order to register and list something we need the models
// I have the models in a folder called nosql
// Structure easy to understand and manage some change in the model
// Create inside 'models' folder a file called index.js
//
// inside tracks controller
// I want to call that model
// I get that model
// in models part
// this refers to models index.js
// we import the tracks model
const { tracksModel } = require('../models')
//
////////////////////////////////////
//
// These functions below are gonna receive the thing express send to us
// tow arguments
// (req, res)
/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
// First method
// obtains a list
const getItems = (req, res) => {
	// callback function
	// two args, express offered methods
	// req, res
	// what is the request || response request
	//
	//
	//
	// to culminate in index.js
	// we say:
	// we have here below this controller (req, res)
	//
	// we want this to response when
	// the route
	// http://localhhost/tracks
	// is placed
	//
	// we already have the name of the route family
	//
	// we want these segmented controllers be called in index.js
	//
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

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
// Second method
// obtains a detail
const getItem = (req, res) => {}
/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
// Third method
// obtains a register
const createItem = (req, res) => {}
/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
// Fourth method
// updates a register
const updateItem = (req, res) => {}
/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
// Fifth method
// eliminates a register
const deleteItem = (req, res) => {}
//
//
//
//
//
//
//

// exported destructuring
module.exports = { getItems, getItem, createItem, deleteItem }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
