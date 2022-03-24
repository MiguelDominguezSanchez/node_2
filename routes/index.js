// Invoke Express Web  Service Provider
const express = require('express')
// import package file system
// Node pre-build package, no need of npm
const fs = require('fs')
// Router function routes management
// comes from express.Router
// Manage routes
const router = express.Router()

// Declare PATH_ROUTES
// it is __dirname
// __dirname it is a Node constant
// __dirname gives the absolute route
// path in where it is the file
// c:/misdocumentos/etc
const PATH_ROUTES = __dirname

// remove extension '.js'
// take the file name (fileName)
const removeExtension = (fileName) => {
	// return what is in the fileName
	// it could be i.e. 'tracks.js'
	// 'tracks.js'
	return (
		fileName
			// Apply split()
			// transform String into array based on st
			.split(
				// based on dot '.'
				'.'
			)
			// from tracks.js
			// returns array
			// [tracks, js]
			// & from that array take the first value 'tracks'
			// with shift() method
			.shift()
		// extracting the file name with no extension
	)
}

// fs function
// uses read the directory synchronously function 'readdirSync'
// reads the PATH_ROUTES directory
// once read it returns an array
// const a = fs.readdirSync(PATH_ROUTES)
fs.readdirSync(PATH_ROUTES)
	// due to its array nature
	// I want it to be filtered
	.filter(
		// once filtered
		// take the file
		// // { a: [ 'index.js', 'tracks.js', ] }
		(file) => {
			// remove extension '.js', function above
			//
			// Concatenate name with a routes family
			// Declare const name, the result of the cleaning of that name
			// Whether it get index or tracks
			const name = removeExtension(file) // users, storage, tracks // it will be run forEach file
			// I am not interested in 'index'
			// if name is different from index
			if (name !== 'index') {
				//
				// check if dynamic route are running
				//
				console.log(`Cargando ruta ${name}`)
				// returns
				//{
				//     "data": [
				//       "hola",
				//       "mundo"
				//   ]
				// }
				//
				// triggers below
				router.use(
					// make use of a file that contains routes
					// place a slash '/'
					//
					// because in app.js requiring '/api'
					// it finalizes with no slash '/'
					// app.use('/api', ('./routes'))
					//
					// so in here we need to continue with a slash '/'
					//
					// with template strings
					// we say the route is the file name
					//
					`/${name}`,
					//
					// so this will be
					// http:://localhost:3000/api/tracks
					// ||
					// http:://localhost:3000/api/users
					// ||
					// http:://localhost:3000/api/storage
					//
					// but we are no indicating
					// what will be the data response
					//
					//
					// we already have the route family name
					//
					// we say hey
					// called tracks.js segmented controllers
					// so we say require.
					// dot '.' to say where I am stopped on
					// and then the file name
					// require(`./${file}`)
					// but the file name with the extension
					// because we are requiring that module here
					// in other words
					// we are here placing '.require(`./tracks.js`)' || '.require(`./users`)' || '.require(`./storage`)'
					// but we say simply 'require(`./${file}`)'
					// and on the prev `/${name}` we are indicating the name
					//
					require(`./${file}`)
					//
				)
			}
			//
		}
	)
// the array PATH_ROUTES
// log array
// console.log({ a })
// returns in console an array with files inside routes directory
// { a: [ 'index.js', 'tracks.js', ] }

// It consists of creating files with the name of the routes family

// exports router
// 'router' function acts returning name of files inside routes folder
module.exports = router
// index.js 'router' imported in app.js
