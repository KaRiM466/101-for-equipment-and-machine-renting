import img from '../../../Images/pick 2.png'
import img1 from '../../../Images/pick 1.png'
import img2 from '../../../Images/pick 3.png'
import img3 from '../../../Images/pick 2.png'
import img4 from '../../../ImagesM/BackUp3n.jpeg'
import img5 from '../../../ImagesM/BickUp1n.jpeg'
import img6 from '../../../ImagesM/BickUp2n.jpeg'
import TouchUs from "../All Component/TouchUs";
import InformationVideo from "../All Component/InformationVideo";
import CardsImages from "../All Component/CardsImages";
import EquipmentsInfo from "../All Component/EquipmentsInfo";


const Miscellaneous = () => {
    return (
        <div className="Miscellaneous">
            <div className="about-us-img">
                <h1 className="about-us-title">Pick Up rental in UAE</h1>
            </div>




            <EquipmentsInfo
                name=""
                nameInfo=""
                title="Pick Up"
                titleInfo="Pickup trucks are a popular type of vehicle used to transport goods and equipment."
                titleInfo2="They usually come in two main types: single cab and double cab. The single cab is ideal for businesses that need more load capacity and prefer to reduce operating costs."
                titleInfo3="The double cab is suitable for people who want to combine the ability to transport passengers and cargo, and is a good choice for personal use."
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


                title='Why Choose Us for Renting pick up '
                desc='At 101 Equipment Rental, our skilled team of professionals is committed to giving you the finest advice and assistance possible during your pick up rental experience.'
                desc1='We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in your goools safely and effectively is our top priority.'
                desc2='When it comes to renting a pick up, 101 Equipment Rental is a reliable source. Get in touch with us right now to talk about your requirements and discover the efficiency, dependability, and convenience of our rental services.'
                info='We also offer a range of other equipment solutions including Large dumper truck , Excavator, dump truck , Shovel,Roller, waste management transportation, and Heavy wheel loader excavator, all designed to assist you in completing your construction projects efficiently.'
                src='https://www.youtube.com/embed/oCKtZs7achE?si=CgqhtlRZPXvwcUAe'
            />

            <TouchUs />

        </div>
    );
}

export default Miscellaneous;