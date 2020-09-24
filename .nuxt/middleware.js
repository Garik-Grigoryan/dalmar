const middleware = {}

middleware['admin'] = require('../middleware/admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['clearValidationErrors'] = require('../middleware/clearValidationErrors.js')
middleware['clearValidationErrors'] = middleware['clearValidationErrors'].default || middleware['clearValidationErrors']

middleware['user'] = require('../middleware/user.js')
middleware['user'] = middleware['user'].default || middleware['user']

<<<<<<< HEAD
middleware['userLogined'] = require('../middleware/userLogined.js')
=======
middleware['userLogined'] = require('..\\middleware\\userLogined.js')
>>>>>>> 164d9feb20a213e877239905f85e623c7f469338
middleware['userLogined'] = middleware['userLogined'].default || middleware['userLogined']

export default middleware
