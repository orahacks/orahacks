import "./Sponsors.scss";
// swiper js
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

// image imports
import prevBtn from "../public/btn-prev.svg";
import nextBtn from "../public/btn-next.svg";

// // testimonials section images
// import star from "../../assets/star.svg";
// import topQuote from "../../assets/top-quote.svg";
// import bottomQuote from "../../assets/bottom-quote.svg";

// import sponsorLogos from "../public/sponsorLogos";
import sponsorLogos from "./sponsorLogos";



function Sponsors() {
    // testimonials data


    const sponsors = sponsorLogos;

    return (
        <section className="home__testimonials padding">
            <div className="boxed">
                <h2 className="heading-primary">
                    {"Sponsors"}
                </h2>
                <div className="home__testimonials__slider">
                    <img src={prevBtn} alt="" className="prev-testimonial" />
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        speed={1200}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".next-testimonial",
                            prevEl: ".prev-testimonial",
                        }}
                        pagination={true}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="mySwiper swiper-testimonial-wrapper"
                    >
                        {sponsors.map((sponsor, index) => {
                            return (
                                <SwiperSlide
                                    className="home__testimonials__slide"
                                    key={index}
                                >
                                    <div className="home__testimonials__slider__item">
                                        <p className="tag">
                                        {<img src={sponsor.logo} alt={`${sponsor.company}`}/>}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <img src={nextBtn} alt="" className="next-testimonial" />
                </div>
            </div>
        </section>
    );
}

export default Sponsors;