// Users Model
// Needs to declare a model
// Utilizing Mongo && Mongoose Manager
// incorporate mongoose
const mongoose = require('mongoose')

// Declarer Scheme Structure
// UserScheme
const TracksScheme = new mongoose.Schema(
	// First section curly braces
	// Declaration Object Structure
	// Idea in Users Collection
	// declare properties and data types
	{
		// Properties
		name: {
			type: String,
		},
		album: {
			type: Number,
		},
		cover: {
			type: String,
			// Validation
			// Say to Data Base:
			// once registering data
			// please, apply this validation
			// to check if it fulfills a pattern
			validate: {
				validator: (req) => {
					return true
				},
				message: 'ERROR_URL',
			},
		},
		// Artist Property
		// 'artist' is a Data type composed by other Data types
		artist: {
			// Property 'name'
			name: {
				type: String,
			},
			// Property 'nickname'
			nickname: {
				type: String,
			},
			// Property 'nationality'
			nationality: {
				type: String,
			},
		},
		// Data Type within Data Types
		duration: {
			start: {
				type: Number,
			},
			end: {
				type: Number,
			},
		},
		// mediaId Data Type Types ObjectId
		// no a simple String
		// String that
		// must conform a certain pattern
		// of characters
		// Structure of how id are in mongo
		mediaId: {
			//
			type: mongoose.Types.ObjectId,
		},
	},
	// Second section curly braces
	// mongoose
	{
		// I want the field to create time stamps
		timestamp: true, // createdAt, updatedAt
		// Mongoose Data Management Version
		versionKey: false,
	}
)

// Indicate export mongoose model
// First arg, declare name of Collection, 'users', Non-relational Data Base
// Second arg, Scheme managed by 'users'
module.exports = mongoose.model('tracks', TracksScheme)
