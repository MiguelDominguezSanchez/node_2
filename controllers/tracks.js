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
const createItem = async (req, res) => {
	const { body } = req
	console.log(body)
	//
	// Controller I need you to do here:
	// Call the Model 'tracksModel'
	//
	// I also want to obtain the body  below result
	const data = await tracksModel.create(
		// I pass you controller, the body
		body
	)
	//
	res.send({
		// Here I log the data
		data,
	})
	//
	//
	//
	// it returns this json
	/*
	{
    "data": {
        "name": "Leifer",
        "album": "Album",
        "cover": "http://tttt.com",
        "artist": {
            "name": "Leifer",
            "nickname": "leifermendez",
            "nationality": "VE"
        },
        "duration": {
            "start": 1,
            "end": 0
        },
        "mediaId": "623af35c023ceb845d00b918",
        "_id": "623d77844ffdb3ba78746557" // This id comes from Mongo Data Base
				// createdAt && updatedAt missing
				//
    }
}
*/
	//
	//
	//
	//
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
