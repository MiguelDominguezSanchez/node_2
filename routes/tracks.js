const express = require('express')
const router = express.Router()
// customHeader middleware
const customHeader = require('../middleware/customHeader')
// validatorCreateItem
const { validatorCreateItem } = require('../validators/tracks')
const { getItems, getItem, createItem } = require('../controllers/tracks')

router.get('/', getItems)
// post request is the
// validation we are doing when creating a new register
router.post(
	'/',
	// validatorCerateItem
	validatorCreateItem,
	// customHeader
	customHeader,
	createItem
)
module.exports = router
