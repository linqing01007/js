(function() {
  const keys = []
  const iframe = document.createElement('iframe')
  iframe.onload = function() {
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
