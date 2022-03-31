const { handleHttpError } = require('../utils/handleError')
/**
 * Array con los roles permitidos
 * @param {*} role
 * @returns
 */
// array passed 'roles'
const checkRole = (roles) => (req, res, next) => {
	try {
		const { user } = req
		console.log({ user })
		// console.log iis getting the whole object of the user
		// that is making that request
		// we observe that it contains the 'user' role
		/*
    {
      user: {
        _id: new ObjectId("6244ad75b83bc56f2a76be1d"),
        name: 'Leifer Mendez',
        age: 29,
        email: 'demo@demo.com',
        role: [ 'user' ],
        deleted: false
      }
    }
    */
		// so, we grab the user role 'user.role'
		const rolesByUser = user.role // TODO ["user"]
		// TODO: ["admin", "manager"]
		// then you are gonna grab the roles of the middleware
		// we are gonna verify that some of these roles
		// that the user has in the data base
		// match the roles that that is requiring for that route
		// How do we do it? It's very simple
		// 'role' array has some with method '.some()'
		// 'roleSingle'
		// pass
		// other array includes roleSingle
		// and it returns true || false
		//
		// we are checking if the 'roles' array has certain values
		// make sure that ["admin", "manager"] permissions
		// exist within the other array 'singleRole'
		// that are the permission assigned to the user
		// I do that with this method of '.some()'
		// and this method of '.includes()'
		//
		// the '.some()' expects that some of the verifications return true
		// in this case, it is expecting
		// that rolesByUser that is roles of user
		// exist within that array
		// one of the values that is running
		// it returns a true
		// so, it returns a true || false
		const checkValueRole = roles.some((roleSingle) =>
			rolesByUser.includes(roleSingle)
		) // TODO: true, false
		// if it returns a 'false'
		// I am gonna say the following:
		if (!checkValueRole) {
			handleHttpError(res, 'USER_NOT_PERMISSIONS', 403)
			return
		}
		// otherwise it does 'next()'
		// to continue its natural flow
		next()
	} catch (e) {
		handleHttpError(res, 'ERROR_PERMISSIONS', 403)
	}
}

module.exports = checkRole
