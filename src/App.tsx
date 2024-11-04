import './App.css'
import { BuscarCiudad } from './componentes/BuscarCiudad'
import { ResultadoClima } from './componentes/ResultadoClima'
import { SearchProvider } from './componentes/context/SearchContext'

function App() {

  return (
    <section className='app-inner'>
      <div className='app-heading'>
        <h2>Clima Actual</h2>
        <p>Ingresa una ciudad para ver su Clima</p>
      </div>
      <SearchProvider>
        <BuscarCiudad />
        <ResultadoClima />
      </SearchProvider>
    </section>
  )
}

export default App
