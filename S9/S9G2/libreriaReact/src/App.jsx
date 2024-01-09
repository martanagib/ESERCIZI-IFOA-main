import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './assets/components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './assets/components/Footer'
import Welcome from './assets/components/Welcome'
import ListaCard from './assets/components/ListaCard'

function App() {


  return (
    <>
      <NavBar></NavBar>
      <Welcome />
      <ListaCard></ListaCard>
      <Footer></Footer>
    </>
  )
}

export default App
