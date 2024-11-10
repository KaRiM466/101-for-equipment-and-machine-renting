import ChooseUs from "./ChooseUs/ChooseUs";
import OurCompany from "./OurCompany/OurCompany";
import Slide from "./Slide/Slide";
import Cards from "./cards/Cards"

const Home = () => {
    return ( 
        <div className="home">
            <Slide />
            <Cards />
            <OurCompany />
            <ChooseUs />
        </div>
     );
}
 
export default Home;