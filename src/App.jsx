import { Container } from 'react-bootstrap'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
    <header className='bg-dark text-center text-light py-3'>
      <h1>titulo</h1>
    </header>
    <Container className='mainContainer'></Container>
    <footer className='bg-dark text-center text-light py-3'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
