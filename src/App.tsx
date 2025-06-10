import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Cabecalho from './components/Cabecalho'
import EstiloGlobal, { Container } from './styles'
import './styles.ts'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
