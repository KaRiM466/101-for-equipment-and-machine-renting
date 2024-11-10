import CardsImages from "../All Component/CardsImages";
import img from '../../../Images/Mini dumper1.jpg'
import img1 from '../../../Images/small dump 1.png'
import img2 from '../../../Images/small dump 2.png'
import img3 from '../../../Images/small dump 3.webp'
import InformationVideo from "../All Component/InformationVideo";
import TouchUs from "../All Component/TouchUs";
import EquipmentsInfo from "../All Component/EquipmentsInfo";


const ScissorLifts = () => {
    return (
        <div className="scissor-lifts">
            <div className="about-us-img">
                <h1 className="about-us-title"> dumper truck  for rent </h1>
            </div>




            <EquipmentsInfo
                name=""
                nameInfo=""
                title="Mini Dumper Truck"
                titleInfo="The mini dumper is a heavy-duty machine used to move materials on a construction site. "
                titleInfo2="It is characterized by its small size that allows it to move in narrow areas and ease of use that is usually easy to operate even for beginners and the ability to maneuver as it can turn and move in confined spaces easily. This machine has a load capacity that varies according to the model, but it is ideal for moving heavy or loose materials such as dirt, gravel, concrete, and removing debris on construction sites and working in gardens or landscapes."
                titleInfo3=""
                img={img}
            />

            <CardsImages
                img1={img1}
                img2={img2}
                img3={img3}
            />




            <InformationVideo


                title='Why Choose Us for Renting dumper truck rental '
                desc='We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in your goools safely and effectively is our top priority.'
                desc1='Choose dumper truck rental for rent from 101 Equipment Rental because we are very reliable source here in UAE (You can check our Google review and see what our customers say about us). Get in touch with us right now to talk about your requirements and discover the efficiency, dependability, and convenience of our rental services.'
                desc2=''
                src='https://www.youtube.com/embed/xYYbkF_Q8D4?si=ZqgetWV1NBghDbBt'
                info='We also offer a range of other equipment solutions including Large dumper truck , Excavator, Shovel , Rollar,pick ups, waste management transportation, and Heavy wheel loader excavator, all designed to assist you in completing your construction projects efficiently.'

            />

            <TouchUs />

        </div>
    );
}

export default ScissorLifts;