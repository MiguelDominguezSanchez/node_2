const express = require('express')
const router = express.Router()
// Middleware validatorCreateItem
const { validatorCreateItem } = require('../validators/tracks')
const { getItems, getItem, createItem } = require('../controllers/tracks')

router.get('/', getItems)
// post request is the
// validation we are doing when creating a new register
router.post(
	'/',
	// Middleware validatorCerateItem
	validatorCreateItem,
	createItem
)
module.exports = router
