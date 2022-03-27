const { validationResult } = require('express-validator')

const validateResults = (req, res, next) => {
	// we have a function to save this type of things
	try {
		// This is a function offered by the  express validator
		// validate the things that are being send by the request
		// if the validation does iis not fulfilled
		// it crashes
		// and pass to the next catch step
		validationResult(req).throw()
		// if there is no error with the validator
		// we say next
		// continue to the controller
		return next()
	} catch (err) {
		// form a 403 error
		// and send a message with an errors array
		// code headers management
		// forbidden
		res.status(403)
		res.send({ errors: err.array() })
	}
}

// export function
module.exports = validateResults
