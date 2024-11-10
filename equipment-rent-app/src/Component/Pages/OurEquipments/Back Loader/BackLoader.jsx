import CardsImages from "../All Component/CardsImages";
import img from '../../../Images/back loader 3.png'
import img1 from '../../../ImagesM/BackLoader1n.jpeg'
import img2 from '../../../ImagesM/BackLoader2n.jpeg'
import img3 from '../../../ImagesM/BackLoader3n.jpeg'
import SlideImg1 from '../../../Images/back loader 3.png'
import SlideImg2 from '../../../Images/back loader 4.jpg'
import SlideImg3 from '../../../Images/back loader 1.jpg'

import InformationVideo from "../All Component/InformationVideo";
import TouchUs from "../All Component/TouchUs";
import EquipmentsInfo from "../All Component/EquipmentsInfo";
import SliderEquipments from "../All Component/SliderEquipments";


const BackLoader = () => {
    return (
        <div className="Back-Loder">
            
            
            <SliderEquipments

                SlidImg1={SlideImg1}
                SlidImg2={SlideImg2}
                SlidImg3={SlideImg3}
                SlideTitle='Back Loader in 101'
                SlideDesc='Back Loader Renting in U.A.E'


            />




            <EquipmentsInfo

                name=""
                nameInfo=""
                title="Back Loader"
                titleInfo="Backhoe loader is a heavy machinery used in construction and building works, and is characterized by its unique design that combines an excavator and a bulldozer, Which makes it versatile and has unique features The ability to dig can dig the soil deeply and efficiently, making it ideal for foundation excavation operations.The front loader enables it to load and transport materials such as sand, gravel and soil."
                titleInfo2="Flexibility It can be used in various applications such as leveling the ground, transporting materials and preparing sites.Ease of control It is characterized by an easy-to-use control system by the operator, which increases efficiency Sustainability Some models are designed to be more fuel efficient, which reduces operating costs"
                titleInfo3="And where they are used in several fields, including They are used in construction projects to level the ground and dig foundations.They can be used in agricultural works such as preparing the land and planting crops.They are used in road maintenance and waste removal"
                img={img}
            />

            <CardsImages
                img1={img1}
                img2={img2}
                img3={img3}
            />

            

            
            <InformationVideo


                title='Why Choose Us for Renting Back Loader in Dubai'
                desc='At 101 Equipment Rental, our skilled team of professionals is committed to giving you the finest advice and assistance possible during your Back Loader rental experience.'
                desc1='We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in your goools safely and effectively is our top priority.'
                desc2='When it comes to renting a Back Loader, 101 Equipment Rental is a reliable source. Get in touch with us right now to talk about your requirements and discover the efficiency, dependability, and convenience of our rental services.'
                info='We also offer a range of other equipment solutions including Large dumper truck , Excavator, dump truck , Shovel,pick ups, waste management transportation, and Heavy wheel loader excavator, all designed to assist you in completing your construction projects efficiently.'
                src='https://www.youtube.com/embed/WIEHKFy509E?si=FsP7Fha3z6-4EYRJ'
            />

            <TouchUs />

        </div>
    );
}

export default BackLoader;