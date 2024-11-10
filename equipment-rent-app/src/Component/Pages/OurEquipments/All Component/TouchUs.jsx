import { Link } from 'react-router-dom';
import './Equipments-All-Style.css'


const TouchUs = () => {
    return ( 
        <div className="Touch-us">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-9">
                        <h1>Get In Touch With Us</h1>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 touch-us-link">
                        <Link to="/ContactForRent" className='touch-us-link-btn'> Get A Quote </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TouchUs;