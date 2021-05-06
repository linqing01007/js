const fs = require('fs')
const addMapping = (router, mapping) => {
  for (let url in mapping) {
    if (url.startsWith('GET')) {
      const path = url.substring(4)
      router.get(path, mapping[url])
    } else if (url.startsWith('POST')) {
      const path = url.substring(5)
      router.post(path, mapping[url])
    } else {
      console.log('invalid url: ', url)
    }
  }
}

const addControllers = (router, dir) => {
  const files = fs.readdirSync(dir)
  console.log(files)
  const js_files = files.filter(file => file.endsWith('.js'))
  for (let file of js_files) {
    console.log('processing file: ', file)
    let mapping = require(dir + '/' + file)
    
    addMapping(router, mapping)
  }
}

module.exports = function (dir = 'controllers') {
  const controllers_dir = __dirname + '/' + dir
  const router = require('koa-router')()
  addControllers(router, controllers_dir)
  return router.routes()
}
