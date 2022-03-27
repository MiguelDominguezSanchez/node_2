const { tracksModel } = require('../models')
/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
	const data = await tracksModel.find({})
	res.send({ data })
}
/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {}
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
	const { body } = req
	console.log(body)
	const data = await tracksModel.create(body)
	res.send({ data })
}

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */

const updateItem = (req, res) => {}

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */

const deleteItem = (req, res) => {}

module.exports = { getItems, getItem, createItem, deleteItem }
