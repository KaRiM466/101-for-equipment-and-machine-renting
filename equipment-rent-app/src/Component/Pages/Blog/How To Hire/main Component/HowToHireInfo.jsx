import { useState } from "react";


const HowToHireInfo = (


    {
        desc1,
        desc1s1,
        title1,
        title2,
        desc2,
        details,
        desc3,
        title3,
        desc4,
        img1,
        title4,
        descBold1,
        desc5,
        descBold2,
        desc6,
        descBold4,
        descBold3,
        desc7,
        desc8,
        descBold5,
        desc9,
        descBold6,
        desc10,
        descBold7,
        descBold8,
        desc11,
        desc12,
        title5,
        desc13,
        desc14,
        li1,
        li2,
        li3,
        li4,
        li5,
        li6,
        li7,
        desc15,
        li8,
        desc16,
        li9,
        desc17,
        li10,
        desc18,
        li11,
        desc19,
        title6,
        title7,
    }






) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (


        <div className="how-to-hire-info">


            <div className="section-1">
                <p>{desc1}</p>
                <p>{desc1s1}</p>
            </div>





            <div className="section-2">
                <h2> {title1} </h2>
                <div className="how-to-hire-info-card">
                    <h2>{title2}</h2>
                    <p>{desc2}</p>
                    <button onClick={toggleVisibility}>
                        {isVisible ? 'Hide Details' : 'Show Details'}
                    </button>
                    {isVisible && (
                        <div className="details">
                            <p>{details}</p>
                        </div>
                    )}
                </div>
                <p>{desc3}</p>
            </div>





            <div className="section-3">
                <h3> {title3} </h3>
                <p>{desc4}</p>
                <img src={img1} alt="" />
            </div>





            <div className="section-4">
                <h3>{title4}</h3>

                <p>{descBold1}</p>
                <p>{desc5}</p>

                <p>{descBold2}</p>
                <p>{desc6}</p>

                <p>{descBold3}</p>
                <p>{desc7}</p>

                <p>{descBold4}</p>
                <p>{desc8}</p>

                <p>{descBold5}</p>
                <p>{desc9}</p>

                <p>{descBold6}</p>
                <p>{desc10}</p>

                <p>{descBold7}</p>
                <p>{desc11}</p>

                <p>{descBold8}</p>
                <p>{desc12}</p>

            </div>








            <div className="section-5">
                <h3>{title5}</h3>
                <p>{desc13}</p>
                <ul>
                    <p>{desc14}</p>
                    <li>{li1}</li>
                    <li>{li2}</li>
                    <li>{li3}</li>
                    <li>{li4}</li>
                    <li>{li5}</li>
                    <li>{li6}</li>
                </ul>
            </div>












            <div className="section-6">
                <h3>{title6}</h3>
                <ol>
                    <li>{li7}</li>
                    <p>{desc15}</p>
                    <li>{li8}</li>
                    <p>{desc16}</p>
                    <li>{li9}</li>
                    <p>{desc17}</p>
                    <li>{li10}</li>
                    <p>{desc18}</p>
                    <li>{li11}</li>
                    <p>{desc19}</p>
                </ol>
            </div>






            <div className="section-7">
                <h2>{title7}</h2>
                <p>you must be logged in to post a comment</p>

            </div>








        </div>


    );
}

export default HowToHireInfo;