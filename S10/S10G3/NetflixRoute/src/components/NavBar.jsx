import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/netflix_logo.png'
import profilo from '../assets/images/kids_icon.png'
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate()
  return (
    <>
      <Navbar className="navbar" bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="100"
              height="40"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/tvshows'>TV Shows</Nav.Link>
            <Nav.Link href='/*'>Movies</Nav.Link>
            <Nav.Link href='/*'>Recently Added</Nav.Link>
            <Nav.Link href='/*'>My List</Nav.Link>
            <ul className="navbar-nav lista">
              <li className="nav-item mt-2 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                  />
                </svg>
              </li>
              <li className="nav-item mt-2 mx-2">
                <small>KIDS</small>
              </li>
              <li className="nav-item mt-2 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bell-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
                  />
                </svg>
              </li>
              <li className="nav-item">
    
                    <img
                      src={profilo}
                    
                      alt="profile"
                      className="lgpro"
                    />
                 
                
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;