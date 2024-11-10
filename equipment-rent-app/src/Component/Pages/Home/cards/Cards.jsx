import './Cards.css'
import CardsData from '../../../../data/CardsData';
import { Link } from 'react-router-dom';

const Cards = () => {
    if (!CardsData) {
        return <div>Loading...</div>; // Or some other fallback UI
    }

    return (
        <div className="home-cards">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-6 ">
                        <div className="home-cards-desc">
                            <h3> 101 Equipment Rental's Popular Services </h3>
                            <p className=""> Excavator And Shovel & Other Equipment For Hire In UAE.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    {CardsData.slice(0, 3).map((item, index) => ( // تعديل هنا لعرض أول 3 عناصر
                        <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                            <Link to={item.url} className="home-cards-details-link">
                                <div className="home-cards-details-info">
                                    <img src={item.image} alt={item.title} className="home-cards-img" />
                                    <div className="home-cards-info">
                                        <h3> {item.title} </h3>
                                        <p> {item.description} <span>{item.details}</span> </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="show-all-products">
                <Link to="/blog" className="show-all-products-btn"> All Products </Link>
            </div>
        </div>
    );
}

export default Cards;
