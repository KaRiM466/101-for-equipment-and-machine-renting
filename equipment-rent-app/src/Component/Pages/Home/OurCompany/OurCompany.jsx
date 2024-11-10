import "./OurCompany.css";
import img from "../../../Images/All 101 img 2.png"


const OurCompany = () => {
    return (




        <div className="Our-company-and-spider-lifts">







            <div className="our-company-home">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <i className="bi bi-arrow-up-right-circle"></i>
                            <h3>Planning</h3>
                            <p>Provide a wide range of equipment (excavators, dump trucks, cranes, mobile power stations).
                                Ensure equipment readiness and regular maintenance.
                                Achieve customer satisfaction by providing flexible solutions and delivering equipment quickly.
                                Access construction and infrastructure companies and expand to other markets.</p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <i className="bi bi-dash-circle"></i>
                            <h3>Construction</h3>
                            <p>Delivering outstanding construction projects according to quality and safety standards.
                                Adhering to deadlines and delivering projects on time.
                                Providing sustainable and effective solutions that meet customer needs and environmental requirements.
                                Building long-term relationships with customers through transparency and reliability.</p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <i className="bi bi-lightbulb"></i>
                            <h3>Solution</h3>
                            <p>We aim to meet the customer's needs at the lowest price with the highest benefit from the equipment we have by documenting the relationship with the customer.</p>
                        </div>
                    </div>
                </div>




            </div>

            <div className="spider-lefts">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <img src={img} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <h3>Specializing in excavators, wheel loaders, and other equipment.</h3>
                            <p>Experience reliability and efficiency with 101 For Machines And Equipments Renting. We guarantee the perfect  precisely when you need it. Our expansive rental fleet boasts an extensive range of top-notch equipment, including Excavator Rental, Shovel, Large dumper truck, dumper truck, Roller, pick up, Heavy wheel loader excavator, 
                            waste management transportation,</p>
                            <p>Explore our diverse selection of Excavator rental models below, and don’t hesitate to request a quote or contact your local branch for further guidance. Trust us for unmatched quality and prompt service.</p>
                        </div>
                    </div>
                </div>
            </div>






        </div>







    );
}

export default OurCompany;