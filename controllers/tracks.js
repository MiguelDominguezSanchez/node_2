const { matchedData } = require('express-validator')
const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
	try {
		const data = await tracksModel.find({})
		res.send({ data })
	} catch (e) {
		handleHttpError(res, 'ERROR_GET_ITEMS')
	}
}
/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
	try {
		req = matchedData(req)
		const { id } = req
		const data = await tracksModel.findById(id)
		res.send({ data })
	} catch (e) {
		handleHttpError(res, 'ERROR_GET_ITEM')
	}
}
/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
	try {
		const body = matchedData(req)

		const data = await tracksModel.create(body)
		res.send({ data })
	} catch (e) {
		handleHttpError(res, 'ERROR_CREATE_ITEMS')
	}
}

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */

const updateItem = async (req, res) => {
	try {
		// 'id' comes from 'body'
		// to extract id from body object
		// and thee rest it will be placed in a constant called body
		// from one object matchedData(req),
		// we are generating two objects
		// one object that its only going to contain 'id'
		// and a remaining with the other things
		// '...body'
		const { id, ...body } = matchedData(req)

		// we have two totally different arrays:
		// one with id
		// {
		// 	id: 1
		// }
		// and the other with the rest of the things
		// that would be, name, album, the details,...
		// {
		// 	name:
		// }

		// findOneAndUpdate
		const data = await tracksModel.findOneAndUpdate(
			// first arg query, search sentence, 'id'
			// so, we have  the id to make the search
			id,
			// second arg 'body'
			// and we have the body that is the information that we are gonna insert when updating
			body
		)
		res.send({ data })
	} catch (e) {
		handleHttpError(res, 'ERROR_UPDATE_ITEMS')
	}
}

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */

const deleteItem = async (req, res) => {
	try {
		req = matchedData(req)
		const { id } = req
		// deleteOne method
		// Mongo creates a _id automatically in the Data Base
		const data = await tracksModel.delete({ _id: id })
		res.send({ data })
	} catch (e) {
		console.log(e)
		handleHttpError(res, 'ERROR_DELETE_ITEM')
	}
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
