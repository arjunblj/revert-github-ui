function fixGithub () {
  const elements = document.getElementsByTagName('div')
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('header-dark')
  }
}

if (window.attachEvent) {
  window.attachEvent('onload', fixGithub)
} else {
  if (window.onload) {
    const curronload = window.onload
    const newonload = evt => {
      curronload(evt)
      fixGithub(evt)
    }
    window.onload = newonload
  } else {
    window.onload = fixGithub
  }
}
