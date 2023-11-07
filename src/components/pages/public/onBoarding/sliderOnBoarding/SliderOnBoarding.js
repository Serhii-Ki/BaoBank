import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//bg-img
import first from "../../../../../assets/onBoarding/slide_one.jpg";
import second from "../../../../../assets/onBoarding/slide_second.jpg";
import third from "../../../../../assets/onBoarding/slide_therd.jpg";

import "./sliderOnBoarding.scss";

function SliderOnBoarding() {

    const sliders = [
        {
            bg: second,
            title: 'Definitely Safe ',
            text: 'Lorem ipsum dolor sit amet, sadipscing elitr, sed'
        },
        {
            bg: second,
            title: 'Definitely Safe ',
            text: 'Lorem ipsum dolor sit amet, sadipscing elitr, sed'
        },
        {
            bg: second,
            title: 'Best Services ',
            text: 'Lorem ipsum dolor sit amet, sadipscing elitr, sed'
        }
    ];

    return (
        <Carousel
            showArrows={false}
            autoPlay={true}
            interval={5000}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            infiniteLoop={true}
            stopOnHover={false}
        >
            {sliders.map((slide, i) => (
                <div key={i} className="onboarding__slide">
                    <img className="onboarding__slide-img" src={slide.bg} alt="slide img" />
                    <h2 className="onboarding__slide-title">{slide.title}</h2>
                    <p className="onboarding__slide-text text">{slide.text}</p>
                </div>
            ))}
        </Carousel>
    );
}

export default SliderOnBoarding;