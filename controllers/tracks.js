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
//
//
//
/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
// First method
// obtains a list
const getItems =
	// if there is an 'await' there must have an 'async'
	async (req, res) => {
		// I want a constant called data
		const data =
			// a beautiful way of have everything ordered
			// you want to wait till this promise is resolved
			// we apply an await
			// an await is a way to wait till this says to us that return st
			// the particularity is that when one uses an 'await'
			// the function in which is holded the 'await'
			// in this case the await is inside getItems
			// this function must have an async
			// if there is an 'await' there must have an 'async'
			await //
			tracksModel
				// model used with Mongoose
				// I want to find with method '.find()'
				// it is a way to  bring all it is inside tracksModel
				// we furtherly apply pagination, query
				.find({})
		res.send({ data })
	}
//
//
//
/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
// Second method
// obtains a detail
const getItem = (req, res) => {}
//
//
//
/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
// Third method
// obtains a register
const createItem =
	// if there is an 'await' there must have an 'async'
	async (req, res) => {
		// Register st in the data base
		// we use the 'create' controller
		//
		//
		//
		// we obtain a body
		// const body = req.body
		//
		//
		//
		// if the constant is called equally to the property we want to do, we eliminate 'body' in 'req.body' and destructure in {body}
		const { body } = req
		// log body check what it has
		console.log(body)
		// returns
		// undefined
		// in the terminal
		// console.log reaches but not the body
		// because we must say to our app.js
		// hey: I want you to be ready to receive info thru a post
		//
		//
		//
		//
		// Controllers always must return st, otherwise it get stuck
		res.send({ algo: 1 })
		//
		//
		// This controller is not associated to anything yet
		// because we have not create that in the routes
	}
//
//
//
/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
// Fourth method
// updates a register
const updateItem = (req, res) => {}
//
//
//
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
