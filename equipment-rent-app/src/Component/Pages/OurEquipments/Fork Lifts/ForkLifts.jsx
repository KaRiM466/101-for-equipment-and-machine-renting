import CardsImages from "../All Component/CardsImages";
import img from '../../../Images/LargDump4.jpg'
import img1 from '../../../ImagesM/LargDumper1.jpeg'
import img2 from '../../../ImagesM/LargDumper2.jpeg'
import img3 from '../../../Images/LargDumper2.jpg'
import SlideImg1 from '../../../Images/larg dumprt1.jpg'
import SlideImg2 from '../../../Images/LargDump4.jpg'
import SlideImg3 from '../../../Images/LargDumper2.jpg'
import InformationVideo from "../All Component/InformationVideo";
import TouchUs from "../All Component/TouchUs";
import EquipmentsInfo from "../All Component/EquipmentsInfo";
import SliderEquipments from "../All Component/SliderEquipments";




const ForkLifts = () => {
    return (
        <div className="Dumper-Truck">
            
            

            <SliderEquipments

                SlidImg1={SlideImg1}
                SlidImg2={SlideImg2}
                SlidImg3={SlideImg3}
                SlideTitle='Dumper Truck in 101'
                SlideDesc='Dumper Truck Renting in U.A.E'


            />


            <EquipmentsInfo
                name=""
                nameInfo=""
                title="Dumper Truck"
                titleInfo="Dump trucks are trucks used to transport and unload bulk materials such as sand, gravel and soil. They are considered essential equipment in construction sites to transport materials needed for road construction and can carry large quantities of materials, so they are designed to work in harsh conditions. They have a dump box, which is usually made of steel and is characterized by its ability to lift the load up to unload it easily."
                titleInfo2=" They are characterized by a hydraulic lifting system that is used to lift the box, which allows the load to be unloaded quickly. Therefore, its structure is strong to bear heavy weights and it has an engine that provides the necessary power to move the truck and provide high performance."
                titleInfo3=""
                img={img}
            />
            <CardsImages 
            
            img1={img1}
            img2={img2}
            img3={img3}
            />

            
            <InformationVideo
            
            title="Why Choose Us for Renting dumper truck in Dubai"
            desc="At 101 Equipment Rental, our skilled team of professionals is committed to giving you the finest advice and assistance possible during your rental experience."
            desc1="We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in your goools safely and effectively is our top priority."
            desc2="When renting a dumper truck, 101 Equipment Rental is a reliable source. Contact us right now to discuss your requirements and discover the efficiency, dependability, and convenience of our rental services."
            info="We also offer a range of other equipment solutions including Large dumper truck , Excavator, Shovel , Rollar,pick ups, waste management transportation, and Heavy wheel loader excavator, all designed to assist you in completing your construction projects efficiently."
            src='https://www.youtube.com/embed/Zdwp6SHw4C0?si=WGaqusdy3hNsnPRx' 
           />


            <TouchUs />
        </div>
    );
}

export default ForkLifts;