// Users Model
// Needs to declare a model
// Utilizing Mongo && Mongoose Manager
// incorporate mongoose
const mongoose = require('mongoose')

// Declarer Scheme Structure
// UserScheme
const StorageScheme = new mongoose.Schema(
	// First section curly braces
	// Declaration Object Structure
	// Idea in Users Collection
	// declare properties and data types
	{
		// Collection Structure
		// Properties
		url: {
			type: String,
		},
		filename: {
			type: Number,
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
module.exports = mongoose.model('storage', StorageScheme)
