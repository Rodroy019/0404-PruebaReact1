import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'

// Componente de tarjeta
const Cards = (props) => {
  return (
    <div>
      <Card key={props.id} style={{ width: '18rem' }}>
        <Card.Img variant='top' src={props.img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

// Definición de tipos de props requeridos
Cards.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Cards
