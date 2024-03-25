const baseURL = 'https://gateway.marvel.com/v1/public/'
const apikey = '?ts=1&apikey=6bb2d9df8dc6a29b66d2bc6cd3c41e25&hash=e13c9fdee7d1fa07540e612c6e3f2b7d'

const getMarvelData = async (dataType) => {
  let url = ''
  if (dataType === 'characters') {
    url = `${baseURL}characters${apikey}`
  } else if (dataType === 'comics') {
    url = `${baseURL}comics${apikey}`
  } else if (dataType === 'series') {
    url = `${baseURL}series${apikey}`
  } else if (dataType === 'events') {
    url = `${baseURL}events${apikey}`
  }

  const res = await fetch(url)
  const data = await res.json()
  return data
}

export default getMarvelData
