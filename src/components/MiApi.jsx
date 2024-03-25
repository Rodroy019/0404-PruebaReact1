import { useState, useEffect } from 'react'
import getMarvelData from '../assets/getMarvel'
import Card from 'react-bootstrap/Card'

const MiApi = () => {
  const [characters, setCharacters] = useState([])
  const [comics, setComics] = useState([])
  const [series, setSeries] = useState([])
  const [events, setEvents] = useState([])

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
    <section>
      <div>
        <h2>Personajes de Marvel</h2>
        {characters.map(character => (
          <Card key={character.id} style={{ width: '18rem' }}>
            <Card.Img variant='top' src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div>
        <h2>Comics de Marvel</h2>
        {comics.map(comic => (
          <Card key={comic.id} style={{ width: '18rem' }}>
            <Card.Img variant='top' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
            <Card.Body>
              <Card.Title>{comic.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div>
        <h2>Series de Marvel</h2>
        {series.map(serie => (
          <Card key={serie.id} style={{ width: '18rem' }}>
            <Card.Img variant='top' src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} />
            <Card.Body>
              <Card.Title>{serie.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div>
        <h2>Eventos de Marvel</h2>
        {events.map(event => (
          <Card key={event.id} style={{ width: '18rem' }}>
            <Card.Img variant='top' src={`${event.thumbnail.path}.${event.thumbnail.extension}`} />
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default MiApi
