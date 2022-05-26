import { Nav,NavDropdown,Container,Navbar } from 'react-bootstrap';
import { Routes , Route , Link} from 'react-router-dom'
import Home from './Components/Home';
import Fruits from './Components/Fruits';
import Diseases from './Components/D and P';
import Login from './Components/Login';
import './index.css'
import Crops from './Components/Crops';
import { HiStar } from 'react-icons/hi';
import styledComponents from 'styled-components';
function App() {
  return (
    <div className='container-fluid'>
      <h2 className='text-center mt-4 text-success' style={{fontWeight:'900'}}><HiStar/>Welcome Farmer<HiStar/></h2>
      <Navbar bg="dark" expand="lg"  varient="white" className='text-danger'>
        <Container>
          <Navbar.Brand href="/"><img src={"https://s3.amazonaws.com/designmantic-logos/logos/2022/May/small-1847-628f370576e98.png"} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="/" activeStyle={{ color: 'white' }}>Home</Nav.Link>
                    <NavDropdown title="INFORMATION" id="basic-nav-dropdown">
                    <NavDropdown.Item href="Fruits">Fruits</NavDropdown.Item>
                    <NavDropdown.Item href="Crops">Crops</NavDropdown.Item>
                    <NavDropdown.Item href="Diseases">Diseases And Pesticides</NavDropdown.Item>
                    </NavDropdown>
                  <Nav.Link href="Login">Register</Nav.Link>
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>

        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/Fruits" element={<Fruits/>} />
           <Route path="/Login" element={<Login/>} />
           <Route path="/Crops" element={<Crops/>} />
           <Route path="/Diseases" element={<Diseases/>} />
       </Routes>
    </div>
  )
}

export default App;
