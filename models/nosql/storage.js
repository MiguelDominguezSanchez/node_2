const mongoose = require('mongoose')
// import package mongoose-delete in the model
const mongooseDelete = require('mongoose-delete')
const StorageScheme = new mongoose.Schema(
	{
		url: {
			type: String,
		},
		filename: {
			type: String,
		},
	},

	{
		timestamp: true, // createdAt, updatedAt

		versionKey: false,
	}
)

// Implementation of package mongoose delete in the model
// Scheme name, plugin, mongooseDelete
// I need overrideMethods 'All'
// in order to override the native methods
// of mongoose with soft delete option
StorageScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model('storage', StorageScheme)
