import './Equipments-All-Style.css'


const CardsImages = ({ img1, img2, img3 , img4 , img5 , img6}) => {
    return (
        <div className="cards-images">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="cards-images-image">
                            <img src={img1} alt="" className="cards-images-image-img" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="cards-images-image">
                            <img src={img2} alt="" className="cards-images-image-img" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="cards-images-image">
                            <img src={img3} alt="" className="cards-images-image-img" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="cards-images-image">
                            <img src={img4} alt="" className="cards-images-image-img" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="cards-images-image">
                            <img src={img5} alt="" className="cards-images-image-img" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="cards-images-image">
                            <img src={img6} alt="" className="cards-images-image-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardsImages;