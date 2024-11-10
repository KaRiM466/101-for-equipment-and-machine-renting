import { useState } from "react";
import HowToHireCards from "../main Component/HowToHireCards";
import img from '../../../../Images/444.webp'
import img1 from '../../../../Images/444-444.webp'
import img2 from '../../../../Images/4444.webp'
import img3 from '../../../../Images/4444-4444.webp'



const HowToHireBoomLifts = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
    return (



        <div className="How-To-Hire-Boom-Lifts">
            <div className="about-us-img">
                <h1 className="about-us-title">Boom Lifts: How they are Used, Load Capacity, Working Range</h1>
            </div>



            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-9">
                        <div className="section-one">
                            <p> Let’s discuss what is boom lift used for. The simple answer is, that a boom lift is used to lift workers on construction sites, farms, utility lines, and more, reaching heights from 30 to 210 feet. </p>
                            <p> If you are curious about why is a boom lift called a boom? Don’t be, because we are here to help and at Luqman Equipment Rental we deliver more than your expectations. </p>
                            <p> Well, a boom lift is called a boom because it consists of a platform or bucket attached to a hydraulic arm that extends vertically and horizontally, allowing workers to reach elevated areas. </p>
                        </div>


                        <div className="section-tow">
                            <h4>  What is a boom and scissor lift?  </h4>
                            <div className="how-to-hire-info-card">
                                <h2>  </h2>
                                <p>   </p>
                                <button onClick={toggleVisibility}>
                                    {isVisible ? 'Hide Details' : 'Show Details'}
                                </button>
                                {isVisible && (
                                    <div className="details">
                                        <p>  </p>
                                    </div>
                                )}
                            </div>
                            <p> Let’s look at this with the help of photos we have put together to help our visitors, clients understand more easily what is a boom lift and scissor lift. </p>
                            <p>A boom lift is an aerial lift with a platform attached to an extendable arm on a movable base, while a scissor lift moves vertically only.</p>
                            <p>Check out the images below for a better understanding of a boom and a scissor lift (you can decide better after looking at the photos, which can be a suitable solution for your work).</p>
                        </div>


                        <div className="section-fuor">
                            <div className="image text-center">
                                <img src={img} alt="" />
                                <img src={img1} alt="" />
                            </div>
                            <h2>Is a boom lift a crane?</h2>
                            <p>People tend to misunderstand the terms between a boom lift & a crane also when a boom lift is not a crane. A boom is an aerial work platform used for lifting workers and materials to elevated heights while the crane can only help the materials to elevated heights. Not to mention, cranes have a hook (but not a lift) although they have a boom system to reach materials to elevated heights.</p>
                            <p> Check out both images of a lift and a crane: </p>

                        </div>
                        <div className="section-fuor">
                            <div className="image text-center">
                                <img src={img2} alt="" />
                                <img src={img3} alt="" />
                            </div>
                            <h2>What is the load capacity of a boom lift?</h2>
                            <p>Well, it is important to understand that, the load capacity of any boom lift is depended on the lift model. Today there are many lift manufacturers in the market, who work hard on every product to make the new one unique and outstanding from the ones already available in the market. Hence, the load capacity of a boom lift varies by model, with the tallest one capable of lifting 770 pounds to 210 feet high and 115 feet horizontally (at the time of writing this article).</p>
                            <p> Similarly, people are curious to know what is the maximum height of a boom lift. Our answer to that question is the same as before depending on the model and size of the lift this maximum height varies. However, the maximum height of a boom lift can reach up to 210 feet, allowing workers to access heights equivalent to 17 stories. </p>
                        </div>

                        <div className="section-five">
                            <h2>How heavy is a boom lift?</h2>
                            <p>The weight of a boom lift varies by model, with different sizes and capacities available for different job requirements</p>
                        </div>

                        <div className="section-six">
                            <h2>What is a load chart?</h2>
                            <p>A load chart is a graphical representation showing the safe working load limits for different configurations of the lift or equipment. If you visit the boom lifts that we rent in UAE, we also give a load chart along with each lift for renters’ ease.</p>
                        </div>
                        <div className="section-siven">
                            <h1>Leave a Reply</h1>
                            <p>  You must be  <a href="...">  logged in  </a>   to post a comment.  </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <HowToHireCards />
                    </div>
                </div>
            </div>
        </div>



    );
}

export default HowToHireBoomLifts;