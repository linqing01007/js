const koa = require('koa')
const app = new koa()
const controller = require('./controller')
app.use(controller())
app.use(async ctx => {
  ctx.body = 'Hello, world!@'
})
app.listen(3000)