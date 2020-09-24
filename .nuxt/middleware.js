const middleware = {}

middleware['admin'] = require('..\\middleware\\admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['clearValidationErrors'] = require('..\\middleware\\clearValidationErrors.js')
middleware['clearValidationErrors'] = middleware['clearValidationErrors'].default || middleware['clearValidationErrors']

middleware['user'] = require('..\\middleware\\user.js')
middleware['user'] = middleware['user'].default || middleware['user']

middleware['userLogined'] = require('..\\middleware\\userLogined.js')
middleware['userLogined'] = middleware['userLogined'].default || middleware['userLogined']

export default middleware
