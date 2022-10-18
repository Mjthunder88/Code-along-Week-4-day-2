const express = require('express')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())
//middleware
//Endpoints go below this 


// the ./ means a file from this current directory
//and we run this line so we can acess the data from the db.json file.
const {getMovies, deleteMovie, createMovie} = require('./controller')

app.get('/api/movies', getMovies)
app.delete('/api/movies/:id', deleteMovie)
app.post('/api/movies', createMovie)


//Endpoints go above this ^
app.listen(4004,console.log(`Up on 404!`))