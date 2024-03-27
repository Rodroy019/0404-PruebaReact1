import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

// Componente funcional Header que recibe la función onSearchChange como prop
function Header ({ onSearchChange }) {
  return (
    // Barra de navegación de Bootstrap con tema oscuro y fijo en la parte superior
    <Navbar bg='dark' data-bs-theme='dark' expand='lg' className='bg-body-tertiary fixed-top'>
      <Container fluid>
        {/* Marca del Navbar que muestra el logo de Marvel */}
        <Navbar.Brand href='#home' className='me-0 me-lg-4'>
          <img
            src='src/assets/img/logo.png' // Ruta de la imagen del logo de Marvel
            alt='Marvel Logo' // Texto alternativo para accesibilidad
            height='30' // Altura de la imagen
            className='d-inline-block align-top me-2' // Clases de Bootstrap para alinear la imagen
            style={{ marginLeft: '10px' }} // Estilo CSS para agregar margen izquierdo al logo
          />
        </Navbar.Brand>
        {/* Botón de despliegue para el colapso del Navbar en dispositivos móviles */}
        <Navbar.Toggle aria-controls='navbar-nav' />
        {/* Contenido del Navbar que se colapsa en dispositivos móviles */}
        <Navbar.Collapse id='navbar-nav' className='justify-content-between'>
          {/* Lista de navegación con enlaces a diferentes secciones */}
          <Nav className='me-auto'>
            <Nav.Link href='#personajes'>Personajes</Nav.Link>
            <Nav.Link href='#comics'>Comics</Nav.Link>
            <Nav.Link href='#series'>Series</Nav.Link>
            <Nav.Link href='#eventos'>Eventos</Nav.Link>
          </Nav>
          {/* Formulario de búsqueda con un campo de entrada */}
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Buscador'
              className='me-2'
              aria-label='Search'
              onChange={onSearchChange} // Llama a la función onSearchChange cuando cambia el valor del campo de búsqueda
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// Prop Types para validar que onSearchChange sea una función requerida
Header.propTypes = {
  onSearchChange: PropTypes.func.isRequired
}

export default Header
