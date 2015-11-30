var getConfig = require('hjs-webpack')
var layout = require('./src/prerender/layout')
var head = require('./src/prerender/head')

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: '!(images)',
  isDev: process.env.NODE_ENV !== 'production',
  html: function (data) {
    return {
      'index.html': data.defaultTemplate({
        html: layout,
        head: head
      }),
      '200.html': data.defaultTemplate()
    }
  }
})
