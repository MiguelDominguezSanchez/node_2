//
//
//
// Declare an object called Models
const models = {
	//
	// Object in we are placing each of the properties
	// its model utilizing with mongoose
	//
	// write three models
	// users
	usersModel: require('./nosql/users'),
	// tracks
	tracksModel: require('./nosql/tracks'),
	// storage
	storageModel: require('./nosql/storage'),
	//
	// we are gonna use a condition on whether the engine is nosql or sql
	// require dynamically the necessary model we are gonna utilize according to our Data Base Model
}
//
//
// Export models object above
module.exports = models
