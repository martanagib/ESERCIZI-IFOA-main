import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import ImageComponent from './components/ImageComponent'

function App() {
  const title = "titolo mio"
  let image = "https://th.bing.com/th/id/OIP.VCEvzcL9vI24lV7h6yBh4AAAAA?pid=ImgDet&w=155&h=212&c=7"
  let alt = "qui dovrebbe esserci un'immagine"

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       <Button title={title} />
       <ImageComponent image={image} alt={alt} style="eight: 200px"/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
