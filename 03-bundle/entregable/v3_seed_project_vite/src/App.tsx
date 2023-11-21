import './App.css'
import optimizeLogo from './assets/optimization-svgrepo-com.svg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/FatehAK/vite-plugin-image-optimizer" target="_blank">
          <img src={optimizeLogo} className="logo logo-optimize" alt="logo optimize image" />
        </a>
      </div>
      <h1>Vite + React + <br></br> vite-plugin-image-optimizer</h1>
      <div className="card">
        aa
      </div>
    </>
  )
}

export default App
