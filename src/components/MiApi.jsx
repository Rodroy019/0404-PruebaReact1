import { useState, useEffect } from 'react'
import getMarvelData from '../assets/js/getMarvel'
import Cards from './Cards'
import Alerta from './Alerta'
import Header from './Header'

const MiApi = () => {
  const [characters, setCharacters] = useState([])
  const [comics, setComics] = useState([])
  const [series, setSeries] = useState([])
  const [events, setEvents] = useState([])
  const [buscar, setBuscar] = useState('')

  // Función para manejar el cambio en el término de búsqueda
  const buscardor = (event) => {
    setBuscar(event.target.value) // Actualiza el estado buscar con el valor introducido por el usuario
  }

  // Efecto para realizar la solicitud de datos a la API de Marvel cuando el componente se monta
  useEffect(() => {
    // Función asincrónica para obtener datos de la API
    const fetchData = async () => {
      // Solicita datos a la API de Marvel y actualiza el estado con los resultados
      const charactersData = await getMarvelData('characters')
      setCharacters(charactersData.data.results)

      const comicsData = await getMarvelData('comics')
      setComics(comicsData.data.results)

      const seriesData = await getMarvelData('series')
      setSeries(seriesData.data.results)

      const eventsData = await getMarvelData('events')
      setEvents(eventsData.data.results)
    }

    fetchData() // Llama a la función fetchData para realizar la solicitud de datos cuando el componente se monta
  }, []) // La lista de dependencias está vacía, por lo que el efecto se ejecuta solo una vez al montar el componente

  // Renderiza el contenido del componente MiApi
  return (
    <section className='container'>
      <Header onSearchChange={buscardor} /> {/* Renderiza el componente Header y pasa la función buscardor como prop */}
      {/* Sección para mostrar los personajes de Marvel */}
      <div id='personajes' className='section'>
        <h2>Personajes de Marvel</h2>
        <div className='card-container'>
          {/* Filtra y mapea los datos de personajes, renderiza el componente Cards para cada elemento */}
          {characters
            .filter((character) => character.name.toLowerCase().includes(buscar.toLowerCase())) // Filtra los personajes basados en el término de búsqueda
            .map(character => (
              <Cards key={character.id} img={`${character.thumbnail.path}.${character.thumbnail.extension}`} name={character.name} /> // Renderiza una tarjeta para cada personaje
            ))}
          {/* Muestra una alerta si no se encuentran resultados para la búsqueda */}
          {characters.filter((character) => character.name.toLowerCase().includes(buscar.toLowerCase())).length === 0 && (
            <Alerta variant='danger' descripcion='¡No se encontraron resultados!' />
          )}
        </div>
        <hr />
      </div>
      {/* Sección para mostrar los comics de Marvel */}
      <div id='comics' className='section'>
        <h2>Comics de Marvel</h2>
        <div className='card-container'>
          {/* Filtra y mapea los datos de cómics, renderiza el componente Cards para cada elemento */}
          {comics
            .filter((comic) => comic.title.toLowerCase().includes(buscar.toLowerCase())) // Filtra los cómics basados en el término de búsqueda
            .map(comic => (
              <Cards key={comic.id} img={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} name={comic.title} /> // Renderiza una tarjeta para cada cómic
            ))}
          {/* Muestra una alerta si no se encuentran resultados para la búsqueda */}
          {comics.filter((comic) => comic.title.toLowerCase().includes(buscar.toLowerCase())).length === 0 && (
            <Alerta variant='danger' descripcion='¡No se encontraron resultados!' />
          )}
        </div>
        <hr />
      </div>
      {/* Sección para mostrar las series de Marvel */}
      <div id='series' className='section'>
        <h2>Series de Marvel</h2>
        <div className='card-container'>
          {/* Filtra y mapea los datos de series, renderiza el componente Cards para cada elemento */}
          {series
            .filter((serie) => serie.title.toLowerCase().includes(buscar.toLowerCase())) // Filtra las series basadas en el término de búsqueda
            .map(serie => (
              <Cards key={serie.id} img={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} name={serie.title} /> // Renderiza una tarjeta para cada serie
            ))}
          {/* Muestra una alerta si no se encuentran resultados para la búsqueda */}
          {series.filter((serie) => serie.title.toLowerCase().includes(buscar.toLowerCase())).length === 0 && (
            <Alerta variant='danger' descripcion='¡No se encontraron resultados!' />
          )}
        </div>
        <hr />
      </div>
      {/* Sección para mostrar los eventos de Marvel */}
      <div id='eventos' className='section'>
        <h2>Eventos de Marvel</h2>
        <div className='card-container'>
          {/* Filtra y mapea los datos de eventos, renderiza el componente Cards para cada elemento */}
          {events
            .filter((event) => event.title.toLowerCase().includes(buscar.toLowerCase()))
            .map(event => (
              <Cards key={event.id} img={`${event.thumbnail.path}.${event.thumbnail.extension}`} name={event.title} />
            ))}
          {/* Muestra una alerta si no se encuentran resultados para la búsqueda */}
          {events.filter((event) => event.title.toLowerCase().includes(buscar.toLowerCase())).length === 0 && (
            <Alerta variant='danger' descripcion='¡No se encontraron resultados!' />
          )}
        </div>
        <hr />
      </div>
    </section>
  )
}

export default MiApi
