const appendHelloWorld = async function () {
  const { default: renderHelloWorld } = await import('/imports/helloworld')
  renderHelloWorld()
}

export default function () {
  const $button = document.createElement('button')
  $button.innerHTML = 'button'
  $button.onclick = appendHelloWorld
  document.body.appendChild($button)
}
