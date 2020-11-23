(function() {
  const keys = []
  console.log(11111111111)
  const iframe = document.createElement('iframe')
  iframe.onload = function() {
    console.log(2222222222222)
    const iframeKeys = Object.keys(iframe.contentWindow)
    Object.keys(window).forEach(function(key) {
      if(!(iframeKeys.includes(key))){
        keys.push(key)
      }
    })
    console.log(keys)
  }
  iframe.src = 'about:blank'
  document.body.appendChild(iframe)
})()