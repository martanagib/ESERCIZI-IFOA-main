import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import TvShows from './components/TvShows';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  

  return (
    <>
     
     <BrowserRouter>
     <NavBar></NavBar>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/tvshows' element={<TvShows />}></Route>
      <Route path='*' element={<NotFound />}></Route>
      </Routes></BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
