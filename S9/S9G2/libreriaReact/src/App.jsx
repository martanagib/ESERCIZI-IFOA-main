import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './assets/components/Footer'
import Main from './assets/components/Main';



function App() {


  return (
    <>
      <NavBar></NavBar>
      <Main id="contenitore"/>
      <Footer></Footer>
    </>
  )
}

export default App
