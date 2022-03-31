// import handle error
const { handleHttpError } = require('../utils/handleError')
// verify token handler
const { verifyToken } = require('../utils/handleJwt')
// inject directly
const { usersModel } = require('../models')
// Call Middleware
const authMiddleware = async (
	// receive
	// request
	req,
	// response
	res,
	// next
	next
) => {
	// We need to include into a try catch
	try {
		// we need to capture the token
		//
		// How do we capture the token?
		//
		// JWT, Json Web Token
		// are used principally to pass as an authorization method in the header.
		//
		// 1 - inject bearer token in auth headers
		//
		// How do we capture that token in the data base?
		//
		// first make sure that
		// if the token header doesn't exists
		// we return an error 'NOT_TOKEN'
		// to convey the token is needed
		if (!req.headers.authorization) {
			handleHttpError(res, 'NEED_SESSION', 401)
			return
		}
		//if it pass this condition it's because we already have a token 'req.headers.authorization'
		// but in here we are getting 'bearer'
		// Bearer 3333333
		// I am gonna say to divide that chain with a space character and get the latest value of the array
		// .split(' ').pop()
		// it means that it is going to get only the string
		// and it will omit the word 'bear'
		const token = req.headers.authorization.split(' ').pop()
		// once we have the token
		// we need to know what the payload is
		// what iis the util useful charge bear
		// that has that token
		// in order to know that id
		// to check who is that person
		// and if utterly has permission || not
		// to continue
		// For that we need to verify the token data
		// with the function of the handle
		// verify token
		const dataToken = await verifyToken(
			// session token passed
			token
		)
		//
		// to this point we need to make sure that an id exists
		// if '_id' property doesn't exist
		// that's the property placed as payload
		// in 'handleJwt.js' within 'tokenSign'
		// when I am passing  as a payload an property called '_id'
		// {
		// _id: user._id,
		// role: user.role
		// }
		// I am saying here:
		// If _id doesn't exists
		// return ERROR_ID_TOKEN
		if (!dataToken._id) {
			handleHttpError(res, 'ERROR_ID_TOKEN', 401)
			return
		}
		// otherwise, if dataToken exists
		// next()
		// enable pass to this person

		// if the token is valid
		// if the token exists
		// I want to know as a controller who is the user that is consuming this token
		const user = await usersModel.findById(dataToken._id)
		// hey, as everything it's correct
		// inject a property in the request equal to user
		req.user = user
		// and you go with all of that
		// it facilitates development
		// in controllers tracks.js
		// you can know user
		next()
		// so, we are making a middleware
		// verifyToken is in charge of verifying
		// that the token is signed by us
		// that it is valid and so on
		// so, if you pass that function
		// it means that the token is signed and correct
		// and also, I make sure that the token fulfills
		// its data structure, etc
		//
		// How do we test this
		// first we have to inject this middleware
		// 'authMiddleware'
		// because we are not using it in any place
		// so, we are gonna place it in the
		// route of listing tracks 'routes > tracks.js'
		//
		//
		//
	} catch (e) {
		// if by any chance st breaks
		// I want to make use of my Handle Error
		handleHttpError(
			// pass the response
			res,
			// pass the error
			'NOT_SESSION',
			// status code
			401
		)
	}
}

// Export
module.exports = authMiddleware
