import Carousel from 'react-bootstrap/Carousel';

function NoTransitionExample({SlidImg1 , SlidImg2 , SlidImg3 , SlideTitle , SlideDesc}) {
    return (
        <Carousel slide={false}>
            <Carousel.Item>
                <img
                    className="d-block slider-img"
                    src={SlidImg1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{SlideTitle}</h3>
                    <p>{SlideDesc}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block slider-img"
                    src={SlidImg2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{SlideTitle}</h3>
                    <p>{SlideDesc}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block slider-img"
                    src={SlidImg3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{SlideTitle}</h3>
                    <p>{SlideDesc}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default NoTransitionExample;