import express from 'express'
import { engine } from 'express-handlebars'
import mongoose from 'mongoose'
import 'dotenv/config'
import URL from './models/url.js'
import shortenURL from './utils/shortenURL.js'

const app = express()
const port = 3000
const urlLength = 5

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('mongodb connected')
  })
  .catch(error => {
    console.log(error)
  })

app.get('/', (req, res) => {
  res.render('home')
})

app.post('/', (req, res) => {
  const endPrefix = shortenURL(urlLength)
  const document = {
    shortURL: `http://localhost/${endPrefix}`,
    originURL: req.body.url
  }

  URL.create(document)
    .then(() => res.render('home', { shortURL: endPrefix }))
    .catch(error => console.log(error))  
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})