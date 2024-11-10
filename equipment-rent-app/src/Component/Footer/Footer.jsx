import { Nav } from "react-bootstrap";
import "./Footer.css"
import { Link } from "react-router-dom";
import logo from '../Images/logoo not bg.png'

const Footer = () => {
    return (
        <div className="tow-footer">
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 mr-4">
                            <div className="content-footer">
                                <img src={logo} alt="" className="logo" />
                                <p>Experience reliability and efficiency with 101 for machine and equipment renting</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-2">
                            <div className="quick-links">
                                <h3>Quick Links</h3>
                                <Nav.Link as={Link} to="/" className="navbar-item">Home</Nav.Link>
                                <Nav.Link as={Link} to="/About" className="navbar-item">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/Blog" className="navbar-item">Blog</Nav.Link>
                                <Nav.Link as={Link} to="/Contact" className="navbar-item">Contact Us</Nav.Link>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-2">
                            <div className="our-service">
                                <h3>Our Service</h3>
                                <Nav.Link as={Link} to="/ExcavatorRental" className="navbar-item">Excavator Rental</Nav.Link>
                                <Nav.Link as={Link} to="/Shovel" className="navbar-item">Shovel</Nav.Link>
                                <Nav.Link as={Link} to="/Dumptruck" className="navbar-item">Dump truck</Nav.Link>
                                <Nav.Link as={Link} to="/Rollar" className="navbar-item">Rollar</Nav.Link>
                                <Nav.Link as={Link} to="/Heavywheelloaderexcavator" className="navbar-item">Heavy wheel loader excavator</Nav.Link>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="contact-us-content-footer">
                                <h3>Get In Touch</h3>
                                <a href="tel:00971508202029"> <i className="bi bi-telephone-fill"></i> 00971508202029 </a>
                                <a href="mailto:101heavymachinery@gmail.com"> <i className="bi bi-envelope-paper"></i> 101heavymachinery@gmail.com</a>
                                <a href="https://www.google.com/maps?q=25.276987,55.296249"> <i className="bi bi-geo-alt"></i> Musaffah-M37-210-Abu Dhabi-U.A.E</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="copy-right-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <p>Copyright @ 2024 101 Equipment Rental. All Rights Reserved.</p>
                        </div>
                        <div className="col-3">
                            <div className="footer-icon">
                                <a
                                    href="https://wa.me/971508202029"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp-button"
                                >
                                    <i className="bi bi-whatsapp"></i>
                                    <span className="whatsapp-text">Chat with us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;