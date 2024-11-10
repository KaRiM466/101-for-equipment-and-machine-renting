import { Link } from "react-router-dom";
import BlogData from "../../../data/Bolg";
import "./Blog.css"
import CardsData from "../../../data/CardsData";

const Blog = () => {
    return (
        <div className="blog">
            <div className="container">
                <div className="row">
                    {CardsData.map(item =>



                        <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 content-blog">
                            <Link to={item.url} className="blog-cards-details-link">
                                <div className="blog-cards-details-info">
                                    <img src={item.image} alt={item.title} className="blog-cards-img" />
                                    <div className="blog-cards-info">
                                        <h3> {item.title} </h3>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
}

export default Blog;