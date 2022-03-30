// Call the installed library Bcrypt
const bcryptjs = require('bcryptjs')

/*
  no-encrypted password: hola.01
  @param {*} passwordPlain
*/
// Encrypt
// Get plain text and encrypt it
// and convert it into a Encrypted Dynamic Hash
const encrypt = async (
	// I need as an argument the password plain
	passwordPlain
) => {
	// function encrypt
	// Hash declaring
	// encrypted version of a string
	// encrypted version of our password
	// method bcryptjs
	// need two arguments
	const hash = await bcryptjs.hash(
		// string, password plain text
		passwordPlain,
		// salt
		// salt is a terminology used in cryptography
		// to give it stochastic randomness to an encryption
		// it generates a more random hash
		// it is establish to one's criterion
		// it is usually established 10, 8, 9
		// the more randomness one gives
		10
		// symbols and letters the encrypted  version of our password
	)
	return hash
}

/*
  Pass password with no encryption,
  and pass password with encryption
  @param {*} passwordPlain
  @param {*} hasPassword
*/
// Get Hash previously stored in data base
// and a plain text
// in order to be able to compare them
// and check if the hash is the key
// it is the way to identify if the hash correspond to the key
const compare = async (
	// it receives two arguments
	// a plain text
	passwordPlain,
	// a hash
	hashPassword
) => {
	// we want to return
	return await bcryptjs.compare(
		// first arg string
		passwordPlain,
		// second arg hash
		hashPassword
	)
}

// Helper enables to generate a hash

// export
module.exports = { encrypt, compare }
