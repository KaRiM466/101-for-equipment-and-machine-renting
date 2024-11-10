import "./MainNavbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Images/logoo not bg.png'







const MainNavbar = () => {


    // active navbar item
    const location = useLocation();
    const isActive = (path) => location.pathname === path;


    const isDropdownActive = (paths) => 
        paths.some((path) => location.pathname === path);

    return (


        <Navbar expand="lg" className="navbar-section">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" className="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`navbar-item ${isActive('/') ? 'active-item' : ''}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/About"
              className={`navbar-item ${isActive('/About') ? 'active-item' : ''}`}
            >
              About Us
            </Nav.Link>
            <NavDropdown
              title="Our Equipments"
              className={`navbar-item ${isDropdownActive([
                '/ExcavatorRental',
                '/Dumptruck',
                '/Largedumpertruckrental',
                '/bulldozer',
                '/Rollar',
                '/pickups',
                '/Heavywheelloaderexcavator',
                '/wastemanagementtransportation',
                '/backLoader',
                '/bobcat',
                '/lwbad',
                '/grader',
                '/compactor',
                '/generator',
              ]) ? 'active-item' : ''}`}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/ExcavatorRental"
                className={`navbar-dropdown-item ${isActive('/ExcavatorRental') ? 'active-item' : ''}`}
              >
                Excavator Rental
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/Heavywheelloaderexcavator"
                className={`navbar-dropdown-item ${isActive('/Heavywheelloaderexcavator') ? 'active-item' : ''}`}
              >
                 loader 
              </NavDropdown.Item>
              
              <NavDropdown.Item
                as={Link}
                to="/backLoader"
                className={`navbar-dropdown-item ${isActive('/backLoader') ? 'active-item' : ''}`}
              >
                Back Loader
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/grader"
                className={`navbar-dropdown-item ${isActive('/grader') ? 'active-item' : ''}`}
              >
                Grader
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/bulldozer"
                className={`navbar-dropdown-item ${isActive('/bulldozer') ? 'active-item' : ''}`}
              >
                Bulldozer
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/Rollar"
                className={`navbar-dropdown-item ${isActive('/Rollar') ? 'active-item' : ''}`}
              >
                Rollar
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/Largedumpertruckrental"
                className={`navbar-dropdown-item ${isActive('/Largedumpertruckrental') ? 'active-item' : ''}`}
              >
                Large dumper truck 
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/bobcat"
                className={`navbar-dropdown-item ${isActive('/bobcat') ? 'active-item' : ''}`}
              >
                Bobcat
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/Dumptruck"
                className={`navbar-dropdown-item ${isActive('/Dumptruck') ? 'active-item' : ''}`}
              >
                Mini Dump truck
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/compactor"
                className={`navbar-dropdown-item ${isActive('/compactor') ? 'active-item' : ''}`}
              >
                Compactor
              </NavDropdown.Item>
              
              <NavDropdown.Item
                as={Link}
                to="/lwbad"
                className={`navbar-dropdown-item ${isActive('/lwbad') ? 'active-item' : ''}`}
              >
                Lwbad
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/generator"
                className={`navbar-dropdown-item ${isActive('/generator') ? 'active-item' : ''}`}
              >
                Generator
              </NavDropdown.Item>
              
              
              <NavDropdown.Item
                as={Link}
                to="/pickups"
                className={`navbar-dropdown-item ${isActive('/pickups') ? 'active-item' : ''}`}
              >
                pick ups
              </NavDropdown.Item>
              
              <NavDropdown.Item
                as={Link}
                to="/wastemanagementtransportation"
                className={`navbar-dropdown-item ${isActive('/wastemanagementtransportation') ? 'active-item' : ''}`}
              >
                waste management transportation
              </NavDropdown.Item>
              
              
              
              
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/Blog"
              className={`navbar-item ${isActive('/Blog') ? 'active-item' : ''}`}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/ourTeam"
              className={`navbar-item ${isActive('/ourTeam') ? 'active-item' : ''}`}
            >
              Our Team
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Contact"
              className={`navbar-item ${isActive('/Contact') ? 'active-item' : ''}`}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
}

export default MainNavbar;