const express = require('express')
const router = express.Router()
// import middleware auth
const authMiddleware = require('../middleware/session')
const {
	validatorCreateItem,
	validatorGetItem,
} = require('../validators/tracks')
const {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
} = require('../controllers/tracks')

/**
 * List Items
 * */

router.get(
	'/',
	// place session auth middleware
	authMiddleware,
	getItems
)

/**
 * Get Item detail
 * */

router.get('/:id', validatorGetItem, getItem)
/**
 * Cerate a register
 * */
router.post('/', validatorCreateItem, createItem)
/**
 * Update a register
 * */
// 'id' usage
// sent data needs to match requirements
// it uses two middlewares
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem)
/**
 * Get Item detail
 * */

router.delete('/:id', validatorGetItem, deleteItem)
module.exports = router
