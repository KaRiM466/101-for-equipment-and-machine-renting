import './Equipments-All-Style.css'



const EquipmentsInfoTow = ({ name, nameInfo , nameInfo1 , titleInfo2 , titleInfo3 , title, titleInfo , titleInfo1}) => {
    return (
        <div className="equipments-info">

            <div className="container">
                <div className="equipments-info-details">
                    <h3 className="equipments-info-name"> {name} </h3>
                    <p className="equipments-info-name-info"> {nameInfo} </p>
                    <p className="equipments-info-name-info"> {nameInfo1} </p>
                    <h2 className="equipments-info-title"> {title} </h2>
                    <p className="equipments-info-title-info"> {titleInfo} </p>
                    <p className="equipments-info-title-info"> {titleInfo1} </p>
                    <p className="equipments-info-title-info"> {titleInfo2} </p>
                    <p className="equipments-info-title-info"> {titleInfo3} </p>
                </div>
            </div>
        </div>
    );
}

export default EquipmentsInfoTow;