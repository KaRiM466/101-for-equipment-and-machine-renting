import SliderEquipments from "../OurEquipments/All Component/SliderEquipments";
import "./OurTeam.css";
import img1 from "../../Images/OurTeam1.jpg";
import img2 from "../../Images/OurTeam2.jpg";
import img3 from "../../Images/OurTeam3.jpg";
import img4 from "../../Images/OurTeam4.jpg";
import img5 from "../../Images/OurTeam5.jpg";
import img6 from "../../Images/OurTeam6.jpg";
import SlideImg1 from '../../Images/OurTeam9.jpg'
import SlideImg2 from '../../Images/OurTeam10.jpg'
import SlideImg3 from '../../Images/OurTeam11.webp'

const OurTeam = () => {
    return (
        <div className="our-team">
            <SliderEquipments

                SlidImg1={SlideImg1}
                SlidImg2={SlideImg2}
                SlidImg3={SlideImg3}
                SlideTitle='Our Team 101'
                SlideDesc='101 For Machine And Equipment Renting'

            />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 our-team-image">
                        <img src={img1} alt="" className="our-team-img" />
                        <p>Maintenance team responsible for maintaining equipment performance and ensuring efficient operation.</p>
                        <p>Periodic inspection and testing of equipment to ensure there are no problems.</p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 our-team-image">
                        <img src={img2} alt="" className="our-team-img" />
                        <p>Preventive maintenance and implementing preventive maintenance programs to reduce breakdowns and increase equipment life.</p>
                        <p>Repairing breakdowns and diagnosing and repairing any breakdowns that occur quickly and efficiently.</p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 our-team-image">
                        <img src={img3} alt="" className="our-team-img" />
                        <p>Updating equipment and following up on required updates and modifications to ensure equipment compliance with modern standards.</p>
                        <p>Recording data and documenting all maintenance and repair work to ensure equipment history is tracked.</p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 our-team-image">
                        <img src={img4} alt="" className="our-team-img" />
                        <p>Continuous training and training of workers on how to use equipment safely and efficiently.</p>
                        <p>Cooperating with other teams and coordinating with other teams such as operations and logistics to ensure equipment availability when needed.</p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 our-team-image">
                        <img src={img5} alt="" className="our-team-img" />
                        <p>Inventory management, monitoring and provision of spare parts needed to maintain equipment.</p>
                        <p>This team contributes to improving work efficiency and reducing costs resulting from sudden breakdowns.</p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 our-team-image">
                        <img src={img6} alt="" className="our-team-img" />
                        <p>A ready and integrated team to repair faults and maintain machines and equipment at the highest level.</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
