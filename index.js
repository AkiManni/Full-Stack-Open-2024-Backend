const express = require('express')
const morgan = require('morgan');
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

morgan.token('req-body', (req) => {
  return JSON.stringify(req.body)
})

morgan.token('customStatus', (req, res) => {
  if (res.statusCode.toString() === '200') {
    return '*200 OK!*'
  } else if (res.statusCode.toString() === '400') {
    return '*400 ERROR!*'
  } else {
    return res.statusCode.toString()
  }
})

app.use((req, res, next) => {
  if (req.method === 'POST') {
    morgan(':method :url :customStatus :res[content-length] - :response-time ms :req-body')(req, res, next);
  } else {
    morgan('tiny')(req, res, next);
  }
});

let persons = [  
  {    
    id: "1",    
    name: "Arto Hellas",    
    number: "040-123456" 
  },  
  {    
    id: "2",    
    name: "Ada Lovelace",    
    number: "39-44-5323523"
  },  
  {    
    id: "3",    
    name: "Dan Abramov",    
    number: "12-43-243535"  
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
  response.send(`<p>Phonebook has info for ${persons.length} people</p>\n<p>${Date()}</p>`)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(person => person.id === id)
  if (person) {    
    response.json(person)  
  } else {    
    response.status(404).end()  
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const idList = persons.map(person => parseInt(person.id, 10))
  let randomNumber;

  do{
    randomNumber = Math.floor(Math.random() * 10001);
  } while(idList.includes(randomNumber))

  const newId = persons.length > 0
    ? randomNumber
    : 0;

  return String(newId)
}

app.post('/api/persons', (request, response) => {  
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }

  if (!body.number) {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  }

  if(persons.some(person => person.name.toLocaleLowerCase() == body.name.toLocaleLowerCase())){
    return response.status(400).json({
      error: 'name is already found, name must be unique'
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number || false
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})