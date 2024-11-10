import CardsImages from "../All Component/CardsImages";
import img1 from '../../../ImagesM/Roller1n.jpeg'
import img2 from '../../../ImagesM/Roller1.jpeg'
import img3 from '../../../ImagesM/Roller2n.jpeg'


import InformationVideo from "../All Component/InformationVideo";
import TouchUs from "../All Component/TouchUs";
import EquipmentsInfo from "../All Component/EquipmentsInfo";
import img from '../../../ImagesM/Roller3.jpeg'


import SlideImg2 from "../../../ImagesM/Roller1.jpeg"
import SlideImg1 from "../../../ImagesM/Roller2.jpeg"
import SlideImg3 from "../../../ImagesM/Roller3.jpeg"
import SliderEquipments from "../All Component/SliderEquipments";


const SpiderCranes = () => {
    return (
        <div className="scissor-lifts">
            

            <SliderEquipments

                SlidImg1={SlideImg1}
                SlidImg2={SlideImg2}
                SlidImg3={SlideImg3}
                SlideTitle='Roller in 101'
                SlideDesc='Roller Renting in U.A.E'


            />




            <EquipmentsInfo

                name="101 Roller"
                nameInfo="Roller or roller compactor is a device used primarily in construction and road works to level the ground and compact the soil or asphalt. It improves the density of surface materials and achieves a smooth surface, which facilitates the construction of roads and other construction projects. Its features include high density as it exerts high pressure on the materials, which helps increase density and reduce voids."
                title="Roller"
                titleInfo="Variety There are different types of rollers, such as vibrating rollers, fixed rollers and rubber rollers, making them suitable for a variety of applications."
                titleInfo2="Easy control They are often equipped with advanced control systems to facilitate operation."
                titleInfo3="Speed ​​and efficiency contribute to accelerating the construction process by improving the effectiveness of compaction (soil compaction) (asphalt compaction) (soil rehabilitation)"
                img={img}
            />

            <CardsImages
                img1={img1}
                img2={img2}
                img3={img3}
            />

            

            
            <InformationVideo


                title='Why Choose Us for Renting Roller in Dubai'
                desc='At 101 Equipment Rental, our skilled team of professionals is committed to giving you the finest advice and assistance possible during your Roller rental experience.'
                desc1='We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in your goools safely and effectively is our top priority.'
                desc2='When it comes to renting a roller, 101 Equipment Rental is a reliable source. Get in touch with us right now to talk about your requirements and discover the efficiency, dependability, and convenience of our rental services.'
                info='We also offer a range of other equipment solutions including Large dumper truck , Excavator, dump truck , Shovel,pick ups, waste management transportation, and Heavy wheel loader excavator, all designed to assist you in completing your construction projects efficiently.'
                src='https://www.youtube.com/embed/VqMtnE5w_ag?si=3k7nylwBqKkclHpO'
            />

            <TouchUs />

        </div>
    );
}

export default SpiderCranes;