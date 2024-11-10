import CardsImages from "../All Component/CardsImages";

import img from '../../../ImagesM/Shovel4n.jpeg'
import img1 from '../../../ImagesM/Shovel6.jpeg'
import img2 from '../../../ImagesM/Shovel7.jpeg'
import img3 from '../../../ImagesM/Shovel8.jpeg'
import img4 from '../../../ImagesM/Shovel1n.jpeg'
import img5 from '../../../ImagesM/Shovel3n.jpeg'
import img6 from '../../../ImagesM/Shovel5n.jpeg'
import SlideImg1 from '../../../ImagesM/Shovel2n.jpeg'
import SlideImg2 from '../../../ImagesM/Shovel5n.jpeg'
import SlideImg3 from '../../../Images/2-(1).jpg'


import TouchUs from "../All Component/TouchUs";

import EquipmentsInfo from "../All Component/EquipmentsInfo";

import InformationVideo from "../All Component/InformationVideo";
import SliderEquipments from "../All Component/SliderEquipments";


const TruckMountedBoomLifts = () => {
    return (
        <div className="Truck-Mounted-Boom-Lifts">
            
            
            <SliderEquipments

                SlidImg1={SlideImg1}
                SlidImg2={SlideImg2}
                SlidImg3={SlideImg3}
                SlideTitle='Shovel in 101'
                SlideDesc='Shovel Renting in U.A.E'


            />




            <EquipmentsInfo

                name=""
                nameInfo=""
                title="Heavy wheel loader excavator"
                titleInfo="A loader is a heavy machinery used in construction and building works. This device is characterized by the presence of a large bulldozer in the front, making it ideal for loading, transporting and leveling operations."
                titleInfo2="It has a large loading capacity, which allows it to transport large quantities of materials such as soil, sand, and gravel. It can be used in many applications, including digging, leveling, and transporting materials."
                titleInfo3="It is considered time and effort efficient, as it can complete tasks quickly. Most loaders are equipped with advanced control systems that facilitate their operation. It can be used to clean roads and remove waste. It is used in agriculture to load materials and loads."
                img={img}
            />


            <CardsImages
                img1={img1}
                img2={img2}
                img3={img3}
                img4={img4}
                img5={img5}
                img6={img6}
            />





            <InformationVideo


                title='Why Choose Us for Renting Heavy wheel loader excavator '
                desc='At 101 Equipment Rental, our skilled team of professionals is committed to giving you the finest advice and assistance possible during your Heavy wheel loader excavator rental experience.'
                desc1='We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in your goools safely and effectively is our top priority.'
                desc2='When it comes to renting a Heavy wheel loader excavator , 101 Equipment Rental is a reliable source. Get in touch with us right now to talk about your requirements and discover the efficiency, dependability, and convenience of our rental services.'
                info='We also offer a range of other equipment solutions including Large dumper truck , Excavator, dump truck , Shovel,Roller, waste management transportation, and pick up, all designed to assist you in completing your construction projects efficiently.'
                src='https://www.youtube.com/embed/ydKFByg_bzQ?si=zFkdgbkm5dZWJFl7'
            />

            <TouchUs />

        </div>
    );
}

export default TruckMountedBoomLifts;