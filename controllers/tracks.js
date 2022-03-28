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
		// inside here success
		const data = await tracksModel.find({})
		res.send({ data })
	} catch (e) {
		// but st bad happens return catch
		handleHttpError(res, 'ERROR_GET_ITEMS')
	}
}
/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {}
//
//
//
/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (
	// in all the controllers we have two arguments
	// req, res
	// but if we want to we could receive a third one called 'next'
	// it is not as used as much, because it is taken for granted
	req,
	res
) => {
	try {
		// inside here success
		// I am gonna place here a temporal body,
		// I am gonna say: req.body
		// const body = req.body
		// and on the other hand I am gonna say clean body
		// and that bodyClean is gonna be equal to matchedData(req)
		// const bodyClean = matchedData(req)
		// Express-validator offers us a very beautiful function that is the following
		//
		// we change the above format to:
		const body = matchedData(req)

		/*
		// process of recuperating information 
		const { body } = req 
		// console.log(body)
		*/
		const data = await tracksModel.create(body)
		// res.send({ data })
		// once matchedData, bodyClean above done
		//  I return logged body, and bodyClean
		// res.send({ body, bodyClean })
		res.send({ data })
		// in that way we make sure that validator fulfills its function of validator
		// and it returns the data totally clean
	} catch (e) {
		// but st bad happens return catch
		handleHttpError(res, 'ERROR_CREATE_ITEMS')
	}
}

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */

const updateItem = async (req, res) => {}

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */

const deleteItem = async (req, res) => {}

module.exports = { getItems, getItem, createItem, deleteItem }
