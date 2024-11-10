import "./About.css";
import img from "../../Images/All 101 img 2.png"
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about-us">
            <div className="about-us-img">
                <h1 className="about-us-title">About Us</h1>
            </div>

            <div className="container">
                <div className="row about-us-row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="about-us-content">
                            <h3>We Are heavy Equipment Specialist In Abu Dhabi, U.A.E</h3>
                            <p>We are Excavator Rental, Shovel, Large dumper truck rental, Dump truck and other material handling equipment rental specialists. We believe in providing efficient and safe solutions for vertical access and heavy Equipments needs. With state-of-the-art equipment , maintenance, and event management. and safety.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="about-us-content">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="more-about">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-9">
                            <div className="mor-about-content">
                                <h1>Want to know more about us?</h1>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-3">
                            <div className="mor-about-content">
                                <Link className="btn" to="/contact">CONTACT US <i className="bi bi-share"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="our-services">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="our-services-content-one">
                                <h3>Our Mission</h3>
                                <p> is to provide exceptional rental and transportation solutions while upholding safety, reliability, and environmental stewardship, through innovation and personalized service, we foster long-term partnerships, contribute to communities, and ensure the success and satisfaction of our stakeholders.</p>
                                <h3>Our Vision</h3>
                                <p>To understand the challenges of the clients and provide customized solutions with very reliable & well- maintained equipment, with the highest standards of safety and service quality which will add value to the client. To be an integral part of the growth and success story for every customer we serve.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="our-services-content-tow">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-6 services-icon">
                                        <i className="bi bi-gear"></i>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <h3>Our Services</h3>
                                        <p>At 101 heavy machine rentals, we offer comprehensive transportation and heavy machinery equipment rental services tailored to meet the needs of construction, infrastructure, and mining projects.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="our-product">
                <div className="container">
                    <div className="our-product-content">
                        <h3>OUR VALUES</h3>
                        <p>To values that have always been paramount to every employee
                            *Work with integrity, honesty, and efficiency

                            * Commitment to customer is priority, their success is our success.
                            *Work safely, protect health, save the environment

                            * Provide innovative cost effective and customized solutions
                        </p>
                        <h3>OUR COMMITMENT</h3>
                        <p>Our equipment is maintained with the highest standards, in our state-of-the-art-workshops to provide the right equipment for the right job. Strive to give the best services quality & provide round the clock. Training and development of ‘our employees to ensure a professional, ethical, and competent workforce, offering a customized value solution tailored to every customer individual needs. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;