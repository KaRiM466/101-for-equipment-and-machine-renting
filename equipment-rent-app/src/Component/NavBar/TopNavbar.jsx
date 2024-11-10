// src/TopNavbar.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import './MainNavbar.css';
import { UserContext } from '../../../src/UserContext'; // استيراد UserContext

const TopNavbar = () => {
    const { username, setUsername } = useContext(UserContext); // استخدام useContext

    const handleLogout = () => {
        localStorage.removeItem('token'); // إزالة التوكن من localStorage
        setUsername(null); // إعادة تعيين اسم المستخدم في السياق
    };

    return (
        <div className="top-navbar">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="top-navbar-contact">
                            <a href="tel:00971508202029">
                                <i className="bi bi-telephone-x"></i>
                                00971508202029
                            </a>
                            <a href="mailto:101heavymachinery@gmail.com">
                                <i className="bi bi-envelope-paper"></i>
                                101heavymachinery@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="top-navbar-icons">
                            <a href="..."><i className="bi bi-facebook"></i></a>
                            <a href="..."><i className="bi bi-twitter-x"></i></a>
                            <a href="..."><i className="bi bi-pinterest"></i></a>
                            <a href="..."><i className="bi bi-instagram"></i></a>
                            <a href="..."><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="login-register">
                            {username ? (
                                <>
                                    <span className='user-name'>Welcome, {username}!</span>
                                    <button onClick={handleLogout} className='logout-btn'>
                                        <i className="bi bi-box-arrow-right"></i>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to='/register' className='register'>
                                        <i className="bi bi-person-fill-add"></i> Register 
                                    </Link>
                                    <Link to='/login' className='login'>
                                        <i className="bi bi-person-fill"></i> Login 
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNavbar;
