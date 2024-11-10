import CardsImages from "../All Component/CardsImages";
import img from '../../../Images/generator.jpg'
import img1 from '../../../Images/generator1.webp'
import img2 from '../../../Images/generator2.webp'
import img3 from '../../../Images/generator3.webp'
import SlideImg1 from '../../../Images/generator.jpg'
import SlideImg2 from '../../../Images/generatorSlide3.jpg'
import SlideImg3 from '../../../Images/generatorSlide1.jpg'

import InformationVideo from "../All Component/InformationVideo";
import TouchUs from "../All Component/TouchUs";
import EquipmentsInfo from "../All Component/EquipmentsInfo";
import SliderEquipments from "../All Component/SliderEquipments";


const Generator = () => {
    return (
        <div className="Generator">
            <SliderEquipments 
            
            SlidImg1={SlideImg1}
            SlidImg2={SlideImg2}
            SlidImg3={SlideImg3}
            SlideTitle='Generator in 101'
            SlideDesc='Generator Renting in U.A.E'
            
            
            />




            <EquipmentsInfo

                name=""
                nameInfo=""
                title="Generator"
                titleInfo="Generators are used to convert mechanical energy into electrical energy and provide electricity when the power is cut off and provide energy to factories and sites far from the electrical grid."
                titleInfo2=""
                titleInfo3=""
                img={img}
            />

            <CardsImages
                img1={img1}
                img2={img2}
                img3={img3}
            />

            

            
            <InformationVideo


                title='Why Choose Us for Renting Generator in Dubai'
                desc='At 101 Equipment Rental, our skilled team of professionals is committed to giving you the finest advice and assistance possible during your Generator rental experience.'
                desc1='We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in your goools safely and effectively is our top priority.'
                desc2='When it comes to renting a Generator, 101 Equipment Rental is a reliable source. Get in touch with us right now to talk about your requirements and discover the efficiency, dependability, and convenience of our rental services.'
                info='We also offer a range of other equipment solutions including Large dumper truck , Excavator, dump truck , Shovel,pick ups, waste management transportation, and Heavy wheel loader excavator, all designed to assist you in completing your construction projects efficiently.'
                src='https://www.youtube.com/embed/jrajjkqyRqU?si=Wadns2cj7AOwOodS'
            />

            <TouchUs />

        </div>
    );
}

export default Generator;