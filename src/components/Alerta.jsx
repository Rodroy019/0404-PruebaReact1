import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'

// Componente de alerta
function Alerta (props) {
  return (
    <>
      <Alert key={props.variant} variant={props.variant}>
        {props.descripcion}
      </Alert>
    </>
  )
}

// Definición de tipos de props requeridos
Alerta.propTypes = {
  variant: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired
}

export default Alerta
