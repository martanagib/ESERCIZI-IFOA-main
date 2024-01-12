import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import MovieSection from './components/MovieSection';

function App() {


  return (
    <>
 <NavBar className="navbar"></NavBar>
 <h2 className='tv'>TV Shows</h2>
 <MovieSection></MovieSection>
 <Footer></Footer>

    </>
  )
}

export default App
