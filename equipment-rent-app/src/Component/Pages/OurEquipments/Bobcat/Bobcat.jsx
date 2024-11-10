import CardsImages from "../All Component/CardsImages";
import img from '../../../Images/BobcatBg.jpg'
import img1 from '../../../Images/BobcatNobg1.png'
import img2 from '../../../Images/BobcatNobg2.png'
import img3 from '../../../Images/BobcatNobg3.png'
import SlideImg1 from '../../../Images/BobcatBg3.jpg'
import SlideImg2 from '../../../Images/BobcatBg2.jpg'
import SlideImg3 from '../../../Images/BobcatBg1.jpg'
import InformationVideo from "../All Component/InformationVideo";
import TouchUs from "../All Component/TouchUs";
import EquipmentsInfo from "../All Component/EquipmentsInfo";
import SliderEquipments from "../All Component/SliderEquipments";


const Bobcat = () => {
    return (
        <div className="Bobcat">
            
            
            <SliderEquipments

                SlidImg1={SlideImg1}
                SlidImg2={SlideImg2}
                SlidImg3={SlideImg3}
                SlideTitle='Bobcat in 101'
                SlideDesc='Bobcat Renting in U.A.E'


            />




            <EquipmentsInfo

                name=""
                nameInfo=""
                title="Bobcat"
                titleInfo="The Bobcat is a heavy-duty machine, (mini excavator) or (multi-purpose vehicle) characterized by its ability to perform in tight spaces. It can be used with a variety of attachments, such as digging, loading, and leveling."
                titleInfo2="Bulldozers, forks, and other attachments, making it a versatile device. Its small size allows it to work in tight, hard-to-reach places. It is designed for easy operation, making it suitable for both beginners and professionals."
                titleInfo3="Its good design allows it to move easily in crowded sites and is used to load and transport materials. It can be used to remove debris and waste and is ideal for land leveling and tree planting work. It is used in agriculture to load and transport materials"
                img={img}
            />

            <CardsImages
                img1={img1}
                img2={img2}
                img3={img3}
            />

            

            
            <InformationVideo


                title='Why Choose Us for Renting Bobcat in Dubai'
                desc='At 101 Equipment Rental, our skilled team of professionals is committed to giving you the finest advice and assistance possible during your Bobcat rental experience.'
                desc1='We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in your goools safely and effectively is our top priority.'
                desc2='When it comes to renting a Bobcat, 101 Equipment Rental is a reliable source. Get in touch with us right now to talk about your requirements and discover the efficiency, dependability, and convenience of our rental services.'
                info='We also offer a range of other equipment solutions including Large dumper truck , Excavator, dump truck , Shovel,pick ups, waste management transportation, and Heavy wheel loader excavator, all designed to assist you in completing your construction projects efficiently.'
                src='https://www.youtube.com/embed/IISsjU-NC_M?si=MjWNzhvQOz59o62B'
            />

            <TouchUs />

        </div>
    );
}

export default Bobcat;