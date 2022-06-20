import { Nav,NavDropdown,Container,Navbar} from 'react-bootstrap';
import { Routes , Route , Link} from 'react-router-dom'
import Home from './Components/Home';
import Fruits from './Components/Fruits';
import Diseases from './Components/D and P';
import Login from './Components/Login';
import './index.css'
import './App.css'
import Crops from './Components/Crops';
import { HiStar } from 'react-icons/hi';
import Adminlogin from './Components/Adminlogin';
import NewAdmin from './Components/NewAdmin';
import Products from './Components/Products';
import Productup from './Components/Productup';
function App() {
  return (
    <div className='container-fluid p-3'>
      <h2 className='text-center mt-2 text-success' style={{fontWeight:'900'}}><HiStar/>Welcome Farmer<HiStar/></h2>
      <Navbar  style={{backgroundColor:'black'}} expand="lg">
        <Container>
          <Navbar.Brand  href="/"><img src='https://s3.amazonaws.com/designmantic-logos/logos/2022/May/small-5691-62925f2da9d13.png'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link className='nav-link' style={{color:'white'}}  href="/">Home</Nav.Link>
                    <NavDropdown activeStyle={{ color: 'white' }} title="INFORMATION" id="basic-nav-dropdown">
                    <NavDropdown.Item className='nav-link'  style={{color:'green'}} href="Fruits">Fruits</NavDropdown.Item>
                    <NavDropdown.Item className='nav-link'  style={{color:'green'}} href="Crops">Crops</NavDropdown.Item>
                    <NavDropdown.Item className='nav-link'  style={{color:'green'}} href="Diseases">Diseases And Pesticides</NavDropdown.Item>
                    </NavDropdown>
                  <Nav.Link className='nav-link'  style={{color:'white'}} href="Login">Register</Nav.Link>
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
           <Route path="/Adminlogin" element={<Adminlogin/>} />
           <Route path="/NewAdmin" element={<NewAdmin/>} />
           <Route path="/Products" element={<Products/>} />
           <Route path="/Productup" element={<Productup/>} />
       </Routes>
    </div>
  )
}

export default App;
