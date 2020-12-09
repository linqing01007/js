const MyModules = (function Manager() {
  let modules = {}
  function define (name, deps, impl) {
    for (let i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]]
    }
    modules[name] = impl.apply(impl, deps)
  }

  function get(name) {
    if (name in modules) {
      return modules[name]
    }else {
      return null
    }
  }
  return {
    define: define,
    get: get
  }
})()

MyModules.define('bar', [], function() {
  function hello (who) {
    return 'Let me introduce: ' + who
  }
  return {
    hello: hello
  }
})
MyModules.define('foo', ['bar'], function(bar) {
  let hungry = 'hippo'
  function awesome () {
    console.log( bar.hello(hungry).toUpperCase())
  }
  return {
    awesome: awesome
  }
})
const bar = MyModules.get('bar')
const foo = MyModules.get('foo')
console.log(bar.hello('hippo'))
foo.awesome()