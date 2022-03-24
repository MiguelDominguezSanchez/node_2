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

// fs function
// uses read the directory synchronously function 'readdirSync'
// reads the PATH_ROUTES directory
// once read it returns an array
const a = fs.readdirSync(PATH_ROUTES)
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
