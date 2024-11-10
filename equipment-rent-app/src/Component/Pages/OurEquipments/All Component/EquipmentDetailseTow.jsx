import { Link } from 'react-router-dom';
import './Equipments-All-Style.css'


const EquipmentDetailseTow = ({mainTitle , mainTitleSpan , img1, img2, img3 , img4 , img5 , img6 , img7 , img8 , title1, title2, title3 , title4 , title5 , title6 , title7 , title8 }) => {
    return (
        <div className="equipment-detailse">
            <div className="container">
                <h1>{mainTitle} <span> {mainTitleSpan} </span></h1>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <a href='...'>
                            <div className="equipment-detailse-info">
                                <img src={img1} alt="" className="equipment-detailse-info-img" />
                                <p className="equipment-detailse-info-title"> {title1} </p>
                                <Link to="" className='equipment-detailse-info-more'>Reade More</Link>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <a href="...">
                            <div className="equipment-detailse-info">
                                <img src={img2} alt="" className="equipment-detailse-info-img" />
                                <p className="equipment-detailse-info-title"> {title2} </p>
                                <Link to="" className='equipment-detailse-info-more'>Reade More</Link>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <a href="...">
                            <div className="equipment-detailse-info">
                                <img src={img3} alt="" className="equipment-detailse-info-img" />
                                <p className="equipment-detailse-info-title"> {title3} </p>
                                <Link to="" className='equipment-detailse-info-more'>Reade More</Link>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <a href="...">
                            <div className="equipment-detailse-info">
                                <img src={img4} alt="" className="equipment-detailse-info-img" />
                                <p className="equipment-detailse-info-title"> {title4} </p>
                                <Link to="" className='equipment-detailse-info-more'>Reade More</Link>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <a href="...">
                            <div className="equipment-detailse-info">
                                <img src={img5} alt="" className="equipment-detailse-info-img" />
                                <p className="equipment-detailse-info-title"> {title5} </p>
                                <Link to="" className='equipment-detailse-info-more'>Reade More</Link>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <a href="...">
                            <div className="equipment-detailse-info">
                                <img src={img6} alt="" className="equipment-detailse-info-img" />
                                <p className="equipment-detailse-info-title"> {title6} </p>
                                <Link to="" className='equipment-detailse-info-more'>Reade More</Link>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <a href="...">
                            <div className="equipment-detailse-info">
                                <img src={img7} alt="" className="equipment-detailse-info-img" />
                                <p className="equipment-detailse-info-title"> {title7} </p>
                                <Link to="" className='equipment-detailse-info-more'>Reade More</Link>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <a href="...">
                            <div className="equipment-detailse-info">
                                <img src={img8} alt="" className="equipment-detailse-info-img" />
                                <p className="equipment-detailse-info-title"> {title8} </p>
                                <Link to="" className='equipment-detailse-info-more'>Reade More</Link>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="load-more">
                <Link to="" className="more-btn">Load More</Link>
            </div>

        </div>
    );
}

export default EquipmentDetailseTow;