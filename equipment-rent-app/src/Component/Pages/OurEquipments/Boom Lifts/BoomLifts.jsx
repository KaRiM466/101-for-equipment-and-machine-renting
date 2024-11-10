import EquipmentsInfo from "../All Component/EquipmentsInfo";
import img1 from '../../../ImagesM/Bulldozer.jpeg'
import img2 from '../../../Images/bulldozerNobg1.png'
import img3 from '../../../Images/bulldozerNobg2.png'
import img4 from '../../../Images/bulldozerNobg3.png'
import SlideImg1 from '../../../ImagesM/Bulldozer.jpeg'
import SlideImg2 from '../../../ImagesM/Bulldozer1n.jpeg'
import SlideImg3 from '../../../Images/buldozer2.jpg'
import CardsImages from "../All Component/CardsImages";
import InformationVideo from "../All Component/InformationVideo";
import TouchUs from "../All Component/TouchUs";
import SliderEquipments from "../All Component/SliderEquipments";


const BoomLifts = () => {
    return (
        <div className="Bulldozer">
            <SliderEquipments

                SlidImg1={SlideImg1}
                SlidImg2={SlideImg2}
                SlidImg3={SlideImg3}
                SlideTitle='Bulldozer in 101'
                SlideDesc='Bulldozer Renting in U.A.E'


            />

            <EquipmentsInfo
                name=''
                nameInfo=''
                title='Bulldozer'
                titleInfo='Bulldozer is a type of heavy machinery used in construction and building works. It is known for its ability to push and move soil and other materials efficiently.'
                titleInfo2='It is equipped with a wide front blade used to cut and move materials such as soil, sand, gravel and prepare construction sites for various purposes such as extending pipes.'
                titleInfo3='It is characterized by the quality of its movement and its ability to push rocky soil, which makes it ideal for excavation and leveling projects. It is considered one of the essential equipment in large projects such as road construction, agricultural projects and leveling works.'
                img={img1}
            />




            <CardsImages
                img1={img2}
                img2={img3}
                img3={img4}
            />



            <InformationVideo
                title='Why Choose Us for Renting Bulldozer '
                desc='At 101 Equipment Rental, our skilled team of professionals is committed to giving you the finest advice and assistance possible during your Bulldozer rental experience.'
                desc1='We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in your goools safely and effectively is our top priority.'
                desc2='When it comes to renting a Bulldozer, 101 Equipment Rental is a reliable source. Get in touch with us right now to talk about your requirements and discover the efficiency, dependability, and convenience of our rental services'
                info='We also offer a range of other equipment solutions including Large dumper truck , Excavator, dump truck , Rollar,pick ups, waste management transportation, and Heavy wheel loader excavator, all designed to assist you in completing your construction projects efficiently.'
                src='https://www.youtube.com/embed/4lGSsTi5GaI?si=yj_w_1h6PEAJt-hM'
            />

            <TouchUs />

        </div>
    );
}

export default BoomLifts;