import CardsImages from "../All Component/CardsImages";
import img from '../../../Images/Compactor1.webp'
import img1 from '../../../Images/compactorNoBg1.png'
import img2 from '../../../Images/CompactorNoBg2.png'
import img3 from '../../../Images/compactorNoBg3.png'
import SlideImg1 from '../../../Images/Compactor1.webp'
import SlideImg2 from '../../../Images/Compactor2.jpg'
import SlideImg3 from '../../../Images/Compactor2.jpg'
import InformationVideo from "../All Component/InformationVideo";
import TouchUs from "../All Component/TouchUs";
import EquipmentsInfo from "../All Component/EquipmentsInfo";
import SliderEquipments from "../All Component/SliderEquipments";


const Compactor = () => {
    return (
        <div className="Compactor">
            
            
            <SliderEquipments

                SlidImg1={SlideImg1}
                SlidImg2={SlideImg2}
                SlidImg3={SlideImg3}
                SlideTitle='Compactor in 101'
                SlideDesc='Compactor Renting in U.A.E'


            />




            <EquipmentsInfo

                name=""
                nameInfo=""
                title="Compactor"
                titleInfo="Compactor soil compactor is a piece of equipment used on construction sites to compact soil and loose materials, which helps improve soil density and prepare it for construction, prepare the soil before pouring concrete, compact soil in road construction projects, and improve soil stability on construction sites. It operates on manual power, making it ideal for small spaces."
                titleInfo2="Hydraulic compactor is used in larger projects and requires more power. It is characterized by high efficiency that helps speed up the compaction process and has a heavy body and a wide base to compact a larger area of ​​soil. It is usually easy to use with a comfortable handle for control."
                titleInfo3=""
                img={img}
            />

            <CardsImages
                img1={img1}
                img2={img2}
                img3={img3}
            />

            

            
            <InformationVideo


                title='Why Choose Us for Renting Compactor in Dubai'
                desc='At 101 Equipment Rental, our skilled team of professionals is committed to giving you the finest advice and assistance possible during your Compactor rental experience.'
                desc1='We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in your goools safely and effectively is our top priority.'
                desc2='When it comes to renting a Compactor, 101 Equipment Rental is a reliable source. Get in touch with us right now to talk about your requirements and discover the efficiency, dependability, and convenience of our rental services.'
                info='We also offer a range of other equipment solutions including Large dumper truck , Excavator, dump truck , Shovel,pick ups, waste management transportation, and Heavy wheel loader excavator, all designed to assist you in completing your construction projects efficiently.'
                src='https://www.youtube.com/embed/k2YCYDk68tM?si=wX9oYr4_ATcA1lIz'
            />

            <TouchUs />

        </div>
    );
}

export default Compactor;