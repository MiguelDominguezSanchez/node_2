const express = require('express')
const router = express.Router()
// Import validator
const { validatorGetItem } = require('../validators/storage')
const uploadMiddleware = require('../utils/handleStorage')
const {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
} = require('../controllers/storage')

// http://localhost:3001/api/storage

/**
 * Lista de items
 */
router.get('/', getItems)
/**
 * Detalle de item
 */
router.get('/:id', validatorGetItem, getItem)
/**
 * Eliminar item
 */
router.delete('/:id', validatorGetItem, deleteItem)
/**
 * Crear item
 */
router.post('/', uploadMiddleware.single('myfile'), createItem)

module.exports = router
