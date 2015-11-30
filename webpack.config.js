var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: '!(images)',
  isDev: process.env.NODE_ENV !== 'production',
  html: function (data) {
    return {
      'index.html': data.defaultTemplate(),
      '200.html': data.defaultTemplate()
    }
  }
})
