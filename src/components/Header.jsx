import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'

function Header () {
  return (
    <Navbar bg='dark' data-bs-theme='dark' expand='lg' className='bg-body-tertiary fixed-top'>
      <Container>
        <Navbar.Brand href='#home'>Marvel</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#personajes'>Personajes</Nav.Link>
          <Nav.Link href='#comics'>Comics</Nav.Link>
          <Nav.Link href='#series'>Series</Nav.Link>
          <Nav.Link href='#eventos'>Eventos</Nav.Link>
        </Nav>
      </Container>
      <Form className='d-flex'>
        <Form.Control
          type='search'
          placeholder='Search'
          className='me-2'
          aria-label='Search'
        />
      </Form>
    </Navbar>
  )
}

export default Header
