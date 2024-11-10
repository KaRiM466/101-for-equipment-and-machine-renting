import './Equipments-All-Style.css'



const InformationVideo = ({ title, desc, desc1, desc2, info , src}) => {
    return (
        <div className="information-video">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="information-video-details">

                            <h2 className="information-video-title"> {title} </h2>
                            <p className="information-video-desc"> {desc} </p>
                            <p className="information-video-desc"> {desc1} </p>
                            <p className="information-video-desc"> {desc2} </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="information-video-iframe">
                            <iframe  src={src} title="Sample Video" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen></iframe>
                            <p className="iframe-info"> {info} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformationVideo;