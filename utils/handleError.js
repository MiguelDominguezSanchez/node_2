// create a function that receive three arguments
const handleHttpError = (
	// first arg: 'res'
	// method in charge of responding the request
	res,
	// second arg: 'message'
	// it could be the typical error message
	message = 'Algo sucedió',
	// third arg:: 'code = 403'
	code = 403
) => {
	// get res and assign it the status the response code
	// code passed by the third argument
	res.status(code)
	// response an error message
	res.status({ error: message })
}
// I am responding with this error 403 'Algo sucedió'

// Destructuring exports function
module.exports = { handleHttpError }
