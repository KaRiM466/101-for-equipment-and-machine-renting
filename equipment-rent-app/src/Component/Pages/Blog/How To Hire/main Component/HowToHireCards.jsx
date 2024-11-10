import { Link } from "react-router-dom";
import BlogData from "../../../../../data/Bolg";


const HowToHireCards = () => {
    return (

        <div className="ho-to-hire-cards">

                <h4>Recent Posts</h4>
                <hr />
            {BlogData.slice(0, 10).map(item =>
                <Link to={item.url} className="blog-cards-details-link">
                    <div className="blog-cards-details-info w-100">
                        <img src={item.image} alt={item.title} className="blog-cards-img" />
                        <div className="blog-cards-info">
                            <h3> {item.title} </h3>
                        </div>
                    </div>
                </Link>
            )}

        </div>


    );
}

export default HowToHireCards;