const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('studio/index-editor'))
  .get('/preview', (req, res) => res.render('studio/preview'))
  .get('/studio/editor', (req, res) => res.render('studio/index-editor'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
