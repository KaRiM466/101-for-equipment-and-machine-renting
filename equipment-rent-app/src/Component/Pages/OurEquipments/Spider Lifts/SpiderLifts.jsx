import CardsImages from "../All Component/CardsImages";
import EquipmentsInfo from "../All Component/EquipmentsInfo";
import InformationVideo from "../All Component/InformationVideo";
import TouchUs from "../All Component/TouchUs";
import img from "../../../Images/bg 4.jpg"
import img1 from "../../../ImagesM/Ex2.jpeg"
import img2 from "../../../ImagesM/Ex1n.jpeg"
import img3 from "../../../ImagesM/Ex3n.jpeg"
import img4 from "../../../Images/excavator1.jpg"
import img5 from "../../../Images/Excevator3.jpg"
import img6 from "../../../Images/bg1.jpg"
import SlideImg1 from "../../../ImagesM/Ex2n.jpeg"
import SlideImg2 from "../../../ImagesM/Ex8.jpeg"
import SlideImg3 from "../../../ImagesM/Ex10.jpeg"
import SliderEquipments from "../All Component/SliderEquipments";





const SpiderLifts = () => {
    return (
        <div className="spider-lifts">



            <SliderEquipments

                SlidImg1={SlideImg1}
                SlidImg2={SlideImg2}
                SlidImg3={SlideImg3}
                SlideTitle='Excavator in 101'
                SlideDesc='Excavator Renting in U.A.E'


            />


            <EquipmentsInfo

                name=""
                nameInfo=""
                title="Excavator Rental"
                titleInfo="Hydraulic Excavators Our excavators come in different sizes and configurations, offering different digging depths, reach capacities and lifting capabilities to suit specific job requirements."
                titleInfo2="They are highly versatile machines used for a variety of purposes, from leveling to comprehensive excavation to demolition work and picking up a variety of tools, providing flexibility and maneuverability for excavation and loading operations."
                titleInfo3="Our equipment ensures optimum performance with minimal fuel consumption. Our excavators prioritize energy saving and efficiency. Our excavators are durable and have a powerful engine. The excavators are powered by diesel engines that provide the horsepower and torque needed to operate the hydraulic system and perform tasks efficiently. The swing mechanism ensures that they can withstand the rigors of heavy-duty tasks."
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


                title="Why Choose Us for Renting Excavator "
                desc="At 101 Equipment Rental, our skilled team of professionals is committed to giving you the finest advice and assistance possible during your  rental experience."
                desc1="We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in reaching your gool safely and effectively is our top priority."
                desc2="When it comes to renting Excavator, 101 Equipment Rental is a reliable source. Get in touch with us right now to talk about your requirements and discover the efficiency, dependability, and convenience of our rental services."
                info="We also offer a range of other equipment solutions including Large dumper truck , Dump truck, Shovel , Rollar,pick ups, waste management transportation, and Heavy wheel loader excavator, all designed to assist you in completing your construction projects efficiently."
                src='https://www.youtube.com/embed/1Qe4xOB3cGY?si=97mf2KEuE0krMcDj'

            />
            <TouchUs />
        </div>
    );
}

export default SpiderLifts;