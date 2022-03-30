const express = require('express')
const { matchedData } = require('express-validator')
const router = express.Router()
// import validators
const { validatorRegister, validatorLogin } = require('../validators/auth')

/**
 * Create a register
 * */
// TODO http://localhost:3001/api/auth/login
// TODO http://localhost:3001/api/auth/register
router.post('/register', validatorRegister, (req, res) => {
	req = matchedData(req)
	res.send({ data: req })
})

module.exports = router
