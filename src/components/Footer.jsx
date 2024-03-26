import Container from 'react-bootstrap/Container'

function Footer () {
  return (
    <footer className='bg-dark text-light'>
      <Container fluid>
        <p className='text-center py-3 m-0'>
          Este es una pagina para propósitos educativos de Desafio LATAM. Todos los derechos reservados.
          <br />
          Desarrollado por Rodrigo Rivas Figueroa.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
