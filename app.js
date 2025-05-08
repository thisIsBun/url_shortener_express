import express from 'express'
import { engine } from 'express-handlebars'
import URL from './models/url.js'
import shortenURL from './utils/shortenURL.js'
import './config/mongoose.js'

const app = express()
const port = 3000
const urlLength = 5

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('home')
})

app.post('/', (req, res) => {
  const shortCode = shortenURL(urlLength)

  URL.findOne({ originURL: req.body.url })
    .then(data => {
      return data ? data : URL.create({ shortCode, originURL: req.body.url })
    })
    .then(data => {
      res.render('home', { shortURL: req.headers.origin + '/' + data.shortCode })
    })
    .catch(error => console.log(error))
  })
  
app.get('/:shortCode', (req, res) => {
  const { shortCode } = req.params
  URL.findOne({ shortCode })
    .then(data => {
      if (data) {
        res.redirect(data.originURL)
      } else {
        res.render('error', { errorURL: 'http://' + req.headers.host + '/' + shortCode })
      }
    })
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})