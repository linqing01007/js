// 取消重复请求
// 对于原生XMLHttpRequest对象，可以通过abort方法来取消
// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://baidu.com', true)
// xhr.send()
// setTimeout(() => xhr.abort(), 200)
// console.log(xhr.response)

const http = require('http')
