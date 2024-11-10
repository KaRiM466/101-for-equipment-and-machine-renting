import './Slide.css';
import pdf from 'file:///C:/Users/User/Desktop/KARIM/equipment-rent-app/src/data/101bdf.pdf';
const Slide = () => {

    
        
      
    return (
        <div className="slide">
            <div className="slide-home">
            </div>
            <div className="container">
            <div className="home-slide-info">
                <h1>Welcome in <span>101 Machines And Equipments Renting</span></h1>
                <p>A Team Of Excavator Rental, and Shovel Experts Ready To Help You.</p>
                <div className="home-slide-info-btns">
                <a href={pdf} target="_blank" rel="noopener noreferrer"> BooK A Service </a>
                <a href="https://maps.app.goo.gl/ZxHmmaMJPZPfYF3v8" target="'_blank'"> OFFice Location </a>
                </div>
            </div>
            </div>
        </div>

    );
}

export default Slide;