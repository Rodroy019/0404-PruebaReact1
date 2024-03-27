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

  const buscardor = (event) => {
    setBuscar(event.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      const charactersData = await getMarvelData('characters')
      setCharacters(charactersData.data.results)

      const comicsData = await getMarvelData('comics')
      setComics(comicsData.data.results)

      const seriesData = await getMarvelData('series')
      setSeries(seriesData.data.results)

      const eventsData = await getMarvelData('events')
      setEvents(eventsData.data.results)
    }

    fetchData()
  }, [])

  return (
    <section className='container'>
      <Header onSearchChange={buscardor} />
      <div id='personajes' className='section'>
        <h2>Personajes de Marvel</h2>
        <div className='card-container'>
          {characters
            .filter((character) => character.name.toLowerCase().includes(buscar.toLowerCase()))
            .map(character => (
              <Cards key={character.id} img={`${character.thumbnail.path}.${character.thumbnail.extension}`} name={character.name} />
            ))}
          {characters.filter((character) => character.name.toLowerCase().includes(buscar.toLowerCase())).length === 0 && (
            <Alerta variant='danger' descripcion='¡No se encontraron resultados!' />
          )}
        </div>
        <hr />
      </div>
      <div id='comics' className='section'>
        <h2>Comics de Marvel</h2>
        <div className='card-container'>
          {comics
            .filter((comic) => comic.title.toLowerCase().includes(buscar.toLowerCase()))
            .map(comic => (
              <Cards key={comic.id} img={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} name={comic.title} />
            ))}
          {comics.filter((comic) => comic.title.toLowerCase().includes(buscar.toLowerCase())).length === 0 && (
            <Alerta variant='danger' descripcion='¡No se encontraron resultados!' />
          )}
        </div>
        <hr />
      </div>
      <div id='series' className='section'>
        <h2>Series de Marvel</h2>
        <div className='card-container'>
          {series
            .filter((serie) => serie.title.toLowerCase().includes(buscar.toLowerCase()))
            .map(serie => (
              <Cards key={serie.id} img={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} name={serie.title} />
            ))}
          {series.filter((serie) => serie.title.toLowerCase().includes(buscar.toLowerCase())).length === 0 && (
            <Alerta variant='danger' descripcion='¡No se encontraron resultados!' />
          )}
        </div>
        <hr />
      </div>
      <div id='eventos' className='section'>
        <h2>Eventos de Marvel</h2>
        <div className='card-container'>
          {events
            .filter((event) => event.title.toLowerCase().includes(buscar.toLowerCase()))
            .map(event => (
              <Cards key={event.id} img={`${event.thumbnail.path}.${event.thumbnail.extension}`} name={event.title} />
            ))}
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
