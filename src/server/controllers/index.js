const index = async (ctx, next) => {
  ctx.response.body = 'hello, index page'
}

const signin = async (ctx, next) => {
  console.log(ctx.request.body)
  ctx.response.body = 'welcome!!'
}

const test = async (ctx, next) => {
  const data = {
    a: '1',
    b: '2'
  }
  ctx.response.body = data
}

module.exports = {
  'GET /': index,
  'GET /test': test,
  'POST /signin': signin
}
