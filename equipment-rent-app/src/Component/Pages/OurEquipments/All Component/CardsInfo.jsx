import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Equipments-All-Style.css'



const CardsInfo = ({ iClass1, iClass2, iClass3, iClass4, title1, title2, title3, title4, desc1, desc2, desc3, desc4 }) => {
    return (
        <div className="cards-info">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="cards-info-content">
                            <FontAwesomeIcon icon={iClass1} size="2x" className='cards-info-content-title-icon' />

                            <h3 className="cards-info-content-title"> {title1} </h3>
                            <p className="cards-info-content-desc"> {desc1} </p>
                        </div>
                    </div>


                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="cards-info-content">
                            <FontAwesomeIcon icon={iClass2} size="2x" className='cards-info-content-title-icon' />
                            <h3 className="cards-info-content-title"> {title2} </h3>
                            <p className="cards-info-content-desc"> {desc2} </p>
                        </div>
                    </div>


                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="cards-info-content">

                            <FontAwesomeIcon icon={iClass3} size="2x" className='cards-info-content-title-icon' />
                            <h3 className="cards-info-content-title"> {title3} </h3>
                            <p className="cards-info-content-desc"> {desc3} </p>
                        </div>
                    </div>


                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="cards-info-content">
                            <FontAwesomeIcon icon={iClass4} size="2x" className='cards-info-content-title-icon' />
                            <h3 className="cards-info-content-title"> {title4} </h3>
                            <p className="cards-info-content-desc"> {desc4} </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default CardsInfo;
