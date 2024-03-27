// URL base de la API de Marvel
const baseURL = 'https://gateway.marvel.com/v1/public/'
// Clave de la API de Marvel (ts, apikey y hash)
const apikey = '?ts=1&apikey=6bb2d9df8dc6a29b66d2bc6cd3c41e25&hash=e13c9fdee7d1fa07540e612c6e3f2b7d'

// Función para obtener datos de Marvel
const getMarvelData = async (dataType) => {
  let url = ''
  // Construir la URL según el tipo de datos requerido
  if (dataType === 'characters') {
    url = `${baseURL}characters${apikey}`
  } else if (dataType === 'comics') {
    url = `${baseURL}comics${apikey}`
  } else if (dataType === 'series') {
    url = `${baseURL}series${apikey}`
  } else if (dataType === 'events') {
    url = `${baseURL}events${apikey}`
  }

  // Realizar la petición a la API y convertir la respuesta a JSON
  const res = await fetch(url)
  const data = await res.json()
  // Retornar los datos obtenidos
  return data
}

export default getMarvelData
