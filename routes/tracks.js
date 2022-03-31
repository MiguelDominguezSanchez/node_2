const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/session')
const checkRole = require('../middleware/role')
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

router.get('/', authMiddleware, getItems)

/**
 * Get Item detail
 * */

router.get('/:id', authMiddleware, validatorGetItem, getItem)
/**
 * Cerate a register
 * */
router.post(
	'/',
	authMiddleware,
	// in the separated part of tracks
	// only the users with an administrator permission with can make post request
	checkRole(['admin']),
	validatorCreateItem,
	createItem
)
/**
 * Update a register
 * */
router.put(
	'/:id',
	authMiddleware,
	validatorGetItem,
	validatorCreateItem,
	updateItem
)
/**
 * Get Item detail
 * */

router.delete('/:id', authMiddleware, validatorGetItem, deleteItem)
module.exports = router
