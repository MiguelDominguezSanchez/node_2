const mongoose = require('mongoose')
// import package mongoose-delete in the model
const mongooseDelete = require('mongoose-delete')
const TracksScheme = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		album: {
			type: String,
		},
		cover: {
			type: String,

			validate: {
				validator: (req) => {
					return true
				},
				message: 'ERROR_URL',
			},
		},

		artist: {
			name: {
				type: String,
			},

			nickname: {
				type: String,
			},

			nationality: {
				type: String,
			},
		},

		duration: {
			start: {
				type: Number,
			},
			end: {
				type: Number,
			},
		},

		mediaId: {
			type: mongoose.Types.ObjectId,
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
TracksScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model('tracks', TracksScheme)
