
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './assets/components/NotFound'
import Home from './assets/components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='*' element={<NotFound />}></Route>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
