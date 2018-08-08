
const apiKey = '66f140466808db7c1056daa086115759'

const convertToBody = (data) => {
  const a = document.createElement('a')
  const img = document.createElement('img')
  a.href = data.facebook_page_url
  img.src = data.image_url
  a.appendChild(img)
  document.body.append(a)
}

const getArtistData = (artistName) => {
  fetch(`https://rest.bandsintown.com/artists/${artistName}?app_id=${apiKey}`)
    .then(response => response.json())
    .then((data) => convertToBody(data))
}

getArtistData('afi')