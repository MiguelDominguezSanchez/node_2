const fs = require('fs')
const { matchedData } = require('express-validator')
const { storageModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../../storage`
// const MEDIA_PATH = `${__dirname}/../storage`

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
	try {
		const data = await storageModel.find({})
		res.send({ data })
	} catch (e) {
		handleHttpError(res, 'ERROR_LIST_ITEMS')
	}
}
/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
	try {
		// id is equal to get in matchedData(req)
		const { id } = matchedData(req)
		const data = await storageModel.findById(id)
		res.send({ data })
	} catch (e) {
		handleHttpError(res, 'ERROR_DETAIL_ITEMS')
	}
}
//
//
//
/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
	// Error Controller
	try {
		// From the route obtain the file name
		// file prop can be taken from req
		const { file } = req
		// console.log(file)
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
	} catch (e) {
		handleHttpError(res, 'ERROR_DETAIL_ITEMS')
	}
}

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */

const deleteItem = async (req, res) => {
	try {
		// id is equal to get in matchedData(req)
		const { id } = matchedData(req)
		const dataFile = await storageModel.findById(id)
		await storageModel.delete({ _id: id })
		const { filename } = dataFile
		const filePath = `${MEDIA_PATH}/${filename}`
		// TODO c:/miproyecto/file-1232
		// absolute route

		// file system unlinkSync
		// eliminate what is on that register
		// fs.unlinkSync(filePath)
		const data = {
			filePath,
			deleted: 1,
		}

		res.send({ data })
	} catch (e) {
		handleHttpError(res, 'ERROR_DETAIL_ITEMS')
	}
}

module.exports = { getItems, getItem, createItem, deleteItem }
