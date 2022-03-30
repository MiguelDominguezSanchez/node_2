const mongoose = require('mongoose')
// import package mongoose-delete in the model
const mongooseDelete = require('mongoose-delete')
const UserScheme = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		age: {
			type: Number,
		},
		email: {
			type: String,

			unique: true,
		},

		password: {
			type: String,
		},

		role: {
			type: ['user', 'admin'],

			default: 'user',
		},
	},

	{
		timestamp: true,

		versionKey: false,
	}
)

// Implementation of package mongoose delete in the model
// Scheme name, plugin, mongooseDelete
// I need overrideMethods 'All'
// in order to override the native methods
// of mongoose with soft delete option
UserScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model('users', UserScheme)
