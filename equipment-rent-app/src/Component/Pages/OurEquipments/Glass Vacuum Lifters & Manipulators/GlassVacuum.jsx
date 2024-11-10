import CardsImages from "../All Component/CardsImages";
import img from '../../../Images/waste management transportation3.jpeg'
import img1 from '../../../Images/waste management transportation1.jpeg'
import img2 from '../../../Images/waste management transportation2.jpeg'
import img3 from '../../../Images/waste management transportation3.jpeg'


import TouchUs from "../All Component/TouchUs";

import InformationVideo from "../All Component/InformationVideo";
import EquipmentsInfo from "../All Component/EquipmentsInfo";


const GlassVacuum = () => {
    return (
        <div className="Glass-Vacuum">
            <div className="about-us-img">
                <h1 className="about-us-title">waste management transportation for Rent </h1>
            </div>




            <EquipmentsInfo
                name=""
                nameInfo=""
                title="waste management transportation"
                titleInfo="LOBD Heavy Equipment Transport Trucks are specially designed to transport large and heavy machinery and equipment, such as excavators, loaders, and bulldozers. This type of truck is used in construction, infrastructure, and excavation projects."
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


                title='Why Choose Us for Renting waste management transportation.'
                desc='At 101 Equipment Rental, our skilled team of professionals is committed to giving you the finest advice and assistance possible during your waste management transportation rental experience.'
                desc1='We help our clients choose the appropriate equipment for their needs. We can assist you even if you require technical training and continuous support throughout your rental. Your achievement in your goools safely and effectively is our top priority.'
                desc2='When it comes to renting a waste management transportation 101 Equipment Rental is a reliable source. Get in touch with us right now to talk about your requirements and discover the efficiency, dependability, and convenience of our rental services.'
                info='We also offer a range of other equipment solutions including Large dumper truck , Excavator, dump truck , Shovel,Roller, Heavy wheel loader excavator, and pick up, all designed to assist you in completing your construction projects efficiently.'
                src='//www.youtube.com/embed/Mwyx012etGI?si=bodSConb6SAoAhKO'
            />

            <TouchUs />

        </div>
    );
}

export default GlassVacuum;