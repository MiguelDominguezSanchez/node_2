const mongoose = require('mongoose')

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

module.exports = mongoose.model('storage', StorageScheme)
