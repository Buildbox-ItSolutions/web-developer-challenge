const express = require('express')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')

const app = express()
const users = []

app.use(express.json())
app.use(cors())

/*
 * name - string
 * message - string
 * image - string
 * id - uuid
 */

app.post('/users', (req, res) => {
  const { name, message, image } = req.body
  users.push({
    name,
    message,
    image,
    id: uuidv4()
  })
  return res.status(201).send()
})

app.get('/users', (req, res) => {
  return res.json(users)
})

app.get('/users/:id', (req, res) => {
  const { id } = req.params
  const user = users.find(user => user.id === id)
  return res.json(user)
})

app.delete('/users/:id', (req, res) => {
  const { id } = req.params
  const userIndex = users.findIndex((user => user.id === id))
  
  users.splice(userIndex, 1)

  return res.status(200).json(users)
})

app.listen(3333)
