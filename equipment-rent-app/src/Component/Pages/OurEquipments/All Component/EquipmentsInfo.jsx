import './Equipments-All-Style.css'



const EquipmentsInfo = ({ name, nameInfo, title , titleInfo , titleInfo2, titleInfo3 , img }) => {
    return (
        <div className="equipments-info">
            <div className="container">
                <h3 className="equipments-info-name"> {name} </h3>
                <p className="equipments-info-name-info"> {nameInfo} </p>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="equipments-info-details">

                            <h2 className="equipments-info-title"> {title} </h2>
                            <p className="equipments-info-title-info"> {titleInfo} </p>
                            <p className="equipments-info-title-info"> {titleInfo2} </p>
                            <p className="equipments-info-title-info"> {titleInfo3} </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="equipments-info-details-image">
                            <img src={img} alt="" className="equipments-info-details-image-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EquipmentsInfo;