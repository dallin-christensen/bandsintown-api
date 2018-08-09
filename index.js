const apiKey = '66f140466808db7c1056daa086115759'

const createPage = () => {
  const container = document.createElement('div')
  const title = document.createElement('h1')
  const imgContainer = document.createElement('div')
  const input = document.createElement('input')
  const button = document.createElement('input')

  input.type = 'text'
  input.id = 'Input'
  button.type = 'button'
  button.value = 'search!'
  button.id = 'Button'
  button.onclick = () => {
    const inputVal = document.getElementById('Input').value
    getArtistData(inputVal)
  }
  title.id = 'Title'
  imgContainer.id = 'BandImg'

  container.appendChild(input)
  container.appendChild(button)
  container.appendChild(title)
  container.appendChild(imgContainer)
  document.body.appendChild(container)
}

const convertToBody = (data) => {
  const a = document.createElement('a')
  const img = document.createElement('img')
  const title = document.createTextNode(data.name)
  const domTitle = document.getElementById('Title')
  const domImg = document.getElementById('BandImg')

  a.href = data.facebook_page_url
  img.src = data.image_url
  a.appendChild(img)
  domTitle.innerHTML = ''
  domTitle.appendChild(title)
  domImg.innerHTML = ''
  domImg.appendChild(a)
}

const getArtistData = (artistName) => {
  fetch(`https://rest.bandsintown.com/artists/${artistName}?app_id=${apiKey}`)
    .then(response => response.json())
    .then((data) => convertToBody(data))
}

createPage()