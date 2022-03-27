const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')
// utils handleValidator
const validateResult = require('../utils/handleValidator')

const validatorCreateItem = [
	// Validations, from Express Validator, exists, notEmpty
	check('name').exists().notEmpty(),
	check('album').exists().notEmpty(),
	check('cover').exists().notEmpty(),
	check('artist').exists().notEmpty(),
	check('artist.name').exists().notEmpty(),
	check('artist.nickname').exists().notEmpty(),
	check('artist.nationality').exists().notEmpty(),
	check('duration').exists().notEmpty(),
	check('duration.start').exists().notEmpty(),
	check('duration.end').exists().notEmpty(),
	check('mediaId').exists().notEmpty().isMongoId(),
	// This Middleware must return response
	// thee middlewares must response the made request
	// the request is a signal being generated in your computer to the server,
	// the server must process it and return a response
	// ie an error, response an error
	// ie a success, response success
	// it must response, otherwise, it lingers in an await cycle
	// and then a timeout appears, after 30s
	(req, res, next) => {
		// imported from utils folder handleValidator
		// return
		return validateResults(req, res, next)
	},
]

module.exports = { validatorCreateItem }
