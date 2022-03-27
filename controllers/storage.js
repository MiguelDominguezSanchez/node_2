const { storageModel } = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL
/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
	const data = await storageModel.find({})
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
	// From the route obtain the file name
	// file prop can be taken from req
	const { body, file } = req
	console.log(file)
	const fileData = {
		filename: file.filename,
		url: `${PUBLIC_URL}/${file.filename}`,
	}
	//
	/*
	{
    "file": {
        "fieldname": "myfile", // Field Name
        "originalname":"Miguel_Dominguez_Sanchez.jpg", // Original Name
        "encoding": "7bit",
        "mimetype": "image/jpeg", // Data Type
        "destination": "/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/leifer-mendez/node/utils/../storage", //  Destination
        "filename": "file-1648286256878.jpg", // File Name
        "path": "/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/leifer-mendez/node/storage/file-1648286256878.jpg", // Path
        "size": 303667 // Path
    }
}
*/
	//
	// we can apply filters in order fo you to filter a particular Data
	// i.e. a PDF, MP3, ...
	//
	//
	//
	const data = await storageModel.create(fileData)
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
