// require packages
/*step one*/const express = require ('express')
const cors = require('cors')
const swapiCtrl = require('./controllers/httpOperations')
//require controller
const ctrl = require('./controllers/crudOperations')

// create server instance
/*step two*/const app = express()

// top level middleware to parse json to js
/*step seven*/app.use(express.json())
app.use(cors())

// end points
/*step four*/ app.get('/users', ctrl.getUsers)
/*step six*/app.get('/user/:id', ctrl.getUserByParam)
/*step seven*/app.get('/user', ctrl.getUserByQuery)
/*step eight*/app.post('/user', ctrl.createNewUser)
app.put('/users/:id', ctrl.updateUser)
app.delete('/users/:id', ctrl.deleteUser )

app.get('/swapi/users/:page', swapiCtrl.getSwapiCharacters)


/*step three*/app.listen(8080, ()=> console.log('🌲server is live🌲'))
