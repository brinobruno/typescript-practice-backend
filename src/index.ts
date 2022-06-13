import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.send('hi')
})

app.listen(3333)