import Container from 'react-bootstrap/Container'

// Componente de pie de página
function Footer () {
  return (
    <footer className='bg-dark text-light'>
      <Container fluid>
        <p className='text-center py-3 m-0'>
          Este es una página para propósitos educativos de Desafío LATAM. Todos los derechos reservados.
          <br />
          Desarrollado por Rodrigo Rivas Figueroa.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
