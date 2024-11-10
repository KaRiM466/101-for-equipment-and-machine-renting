import CardsImages from "../All Component/CardsImages";
import img from '../../../Images/grader6.jpg'
import img1 from '../../../ImagesM/Grader1n.jpeg'
import img2 from '../../../ImagesM/Grader2n.jpeg'
import img3 from '../../../Images/grader3.jpeg'
import SlideImg2 from '../../../Images/grader6.jpg'
import SlideImg1 from '../../../Images/graderBg.jpg'
import SlideImg3 from '../../../ImagesM/Grader2n.jpeg'

import InformationVideo from "../All Component/InformationVideo";
import TouchUs from "../All Component/TouchUs";
import EquipmentsInfo from "../All Component/EquipmentsInfo";
import SliderEquipments from "../All Component/SliderEquipments";


const Grader = () => {
    return (
        <div className="grader">

            <SliderEquipments

                SlidImg1={SlideImg1}
                SlidImg2={SlideImg2}
                SlidImg3={SlideImg3}
                SlideTitle='Grader in 101'
                SlideDesc='Grader Renting in U.A.E'


            />




            <EquipmentsInfo

                name=""
                nameInfo=""
                title="Grader"
                titleInfo="Grader is a heavy equipment used in the construction and maintenance of roads and infrastructure. It is characterized by its long body and large blade and is used for leveling the ground, building roads, repairing potholes and adjusting slopes to ensure that roads are level and ready for use."
                titleInfo2="It is a vital tool in the field of civil engineering and construction as it contributes significantly to improving the quality of roads and infrastructure as it provides precise control over the leveling process and increases the speed and quality of work compared to traditional methods."
                titleInfo3="The blade is the main part as it can be adjusted to raise, lower or change its angle to achieve precise leveling and the body is the structure that connects the blade to the wheels and ensures the balance of the grader during work. The drive system in it includes the engine and wheels that allow the grader to move and enables the driver to control the direction of the grader accurately."
                img={img}
            />

            <CardsImages
                img1={img1}
                img2={img2}
                img3={img3}
            />




            <InformationVideo


                title='Why Choose Us for Renting Grader in Dubai'
                desc='At 101 Equipment Rental, our skilled team of professionals is committed to giving you the finest advice and assistance possible during your Grader rental experience.'
                desc1='We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in your goools safely and effectively is our top priority.'
                desc2='When it comes to renting a Grader, 101 Equipment Rental is a reliable source. Get in touch with us right now to talk about your requirements and discover the efficiency, dependability, and convenience of our rental services.'
                info='We also offer a range of other equipment solutions including Large dumper truck , Excavator, dump truck , Shovel,pick ups, waste management transportation, and Heavy wheel loader excavator, all designed to assist you in completing your construction projects efficiently.'
                src='https://www.youtube.com/embed/cfyeUo18wPM?si=xrpDSU3iF5UV2SDw'
            />

            <TouchUs />

        </div>
    );
}

export default Grader;