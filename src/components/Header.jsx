import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

function Header ({ onSearchChange }) {
  return (
    <Navbar bg='dark' data-bs-theme='dark' expand='lg' className='bg-body-tertiary fixed-top'>
      <Container fluid>
        <Navbar.Brand href='#home' className='me-0 me-lg-4'>
          <img
            src='src/assets/img/logo.png'
            alt='Marvel Logo'
            height='30'
            className='d-inline-block align-top me-2'
            style={{ marginLeft: '10px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav' className='justify-content-between'>
          <Nav className='me-auto'>
            <Nav.Link href='#personajes'>Personajes</Nav.Link>
            <Nav.Link href='#comics'>Comics</Nav.Link>
            <Nav.Link href='#series'>Series</Nav.Link>
            <Nav.Link href='#eventos'>Eventos</Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Buscador'
              className='me-2'
              aria-label='Search'
              onChange={onSearchChange}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  onSearchChange: PropTypes.func.isRequired
}

export default Header
