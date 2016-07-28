var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.dev')
var horizon = require('@horizon/server')

var app = express()
var compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use('/public', express.static('public'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

var server = app.listen(8181, err => {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:8181')
})

var options = {
  permissions: false,
  auto_create_collection: true,
  auth: {
  	token_secret: 'my_super_secret_secret',
    allow_anonymous: true,
    allow_unauthenticated: true
  }
}

horizon(server, options)