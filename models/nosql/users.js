// Users Model
// Needs to declare a model
// Utilizing Mongo && Mongoose Manager
// incorporate mongoose
const mongoose = require('mongoose')

// Declarer Scheme Structure
// UserScheme
const UserScheme = new mongoose.Schema(
	// First section curly braces
	// Declaration Object Structure
	// Idea in Users Collection
	// declare properties and data types
	{
		// Properties
		name: {
			type: String,
		},
		age: {
			type: Number,
		},
		email: {
			type: String,
			// prevent email from repetition
			unique: true,
		},
		// Hash Encrypted in Data Base
		// JWT Json Web token
		password: {
			type: String,
		},
		// Refers to permissions
		// user || admin
		role: {
			// limited to two values
			type: ['user', 'admin'],
			// all register created sett default role 'user
			default: 'user',
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
module.exports = mongoose.model('users', UserScheme)
