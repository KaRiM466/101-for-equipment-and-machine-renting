import CardsImages from "../All Component/CardsImages";
import img from '../../../ImagesM/Lobed1.jpeg'
import img1 from '../../../Images/lwbadBg1.jpg'
import img2 from '../../../ImagesM/Lobed1.jpeg'
import img3 from '../../../Images/lwbadBg2.webp'
import SlideImg1 from '../../../Images/Lwbad1.jpg'
import SlideImg2 from '../../../Images/lwbadBg1.jpg'
import SlideImg3 from '../../../ImagesM/Lobed1.jpeg'
import InformationVideo from "../All Component/InformationVideo";
import TouchUs from "../All Component/TouchUs";
import EquipmentsInfo from "../All Component/EquipmentsInfo";
import SliderEquipments from "../All Component/SliderEquipments";


const Lwbad = () => {
    return (
        <div className="Lwbad">
            
            
            <SliderEquipments

                SlidImg1={SlideImg1}
                SlidImg2={SlideImg2}
                SlidImg3={SlideImg3}
                SlideTitle='Lwbad in 101'
                SlideDesc='Lwbad Renting in U.A.E'


            />




            <EquipmentsInfo

                name=""
                nameInfo=""
                title="Lwbad"
                titleInfo="LWBAD Heavy Equipment Transport Trucks are specially designed to transport large and heavy machinery and equipment, such as excavators, loaders, and bulldozers. This type of truck is used in construction, infrastructure, and excavation projects."
                titleInfo2="To transport machinery from one construction site to another, they are designed to carry large weights, allowing heavy equipment to be transported efficiently. They contain a flat or sloped platform that facilitates the loading and unloading of equipment."
                titleInfo3="They are equipped with safety devices such as tie-down belts and carriers to ensure the stability of the load during transport. Some designs facilitate the loading and unloading process, reducing the time and effort required"
                img={img}
            />

            <CardsImages
                img1={img1}
                img2={img2}
                img3={img3}
            />

            

            
            <InformationVideo


                title='Why Choose Us for Renting LWBAD in Dubai'
                desc='At 101 Equipment Rental, our skilled team of professionals is committed to giving you the finest advice and assistance possible during your LWBAD rental experience.'
                desc1='We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in your goools safely and effectively is our top priority.'
                desc2='When it comes to renting a LWBAD, 101 Equipment Rental is a reliable source. Get in touch with us right now to talk about your requirements and discover the efficiency, dependability, and convenience of our rental services.'
                info='We also offer a range of other equipment solutions including Large dumper truck , Excavator, dump truck , Shovel,pick ups, waste management transportation, and Heavy wheel loader excavator, all designed to assist you in completing your construction projects efficiently.'
                src='https://www.youtube.com/embed/ERIfXVAITT0?si=_bk6i0aIlHc8wHJ6'
            />

            <TouchUs />

        </div>
    );
}

export default Lwbad;