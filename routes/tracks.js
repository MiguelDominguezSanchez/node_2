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
	//
	// it applies a series of rules when we wanna insert data in our Data Base
	//
	// in order to get all the validators > tracks.js iin a clean way within my controller 'validatorCreateItem'
	// Remember that the 'validatorCreateItem' is a filter
	// it is only in charge if the thing are fulfilled or not
	//
	validatorCreateItem,
	// customHeader
	// customHeader, commented now is disabled
	createItem
)
module.exports = router
