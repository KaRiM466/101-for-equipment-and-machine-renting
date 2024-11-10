import { Link } from 'react-router-dom';
import './Equipments-All-Style.css'


const EquipmentDetailse = ({mainTitle , mainTitleSpan , img1, img2, img3, title1, title2, title3 }) => {
    return (
        <div className="equipment-detailse">
            <div className="container">
                <h1>{mainTitle} <span> {mainTitleSpan} </span></h1>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        

                            <div className="equipment-detailse-info">
                                <img src={img1} alt="" className="equipment-detailse-info-img" />
                                <p className="equipment-detailse-info-title"> {title1} </p>
                                
                            </div>

                        
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        


                            <div className="equipment-detailse-info">
                                <img src={img2} alt="" className="equipment-detailse-info-img" />
                                <p className="equipment-detailse-info-title"> {title2} </p>
                               
                            </div>

                        
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        
                            <div className="equipment-detailse-info">
                                <img src={img3} alt="" className="equipment-detailse-info-img" />
                                <p className="equipment-detailse-info-title"> {title3} </p>
                                
                            </div>
                        
                    </div>
                </div>
            </div>

            

        </div>
    );
}

export default EquipmentDetailse;