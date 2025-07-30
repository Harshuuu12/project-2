import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { assets } from "../assets/assets";

const Hero = () => {
  const slides = [
    {
      img: assets.header_img,
      title: "Delicious Meals Delivered",
      subtitle: "Get 25% OFF – Today Only!",
      cta: "Order Now",
    },
    {
      img: assets.header_img1,
      title: "Fresh Food, Fast Delivery",
      subtitle: "Tasty, Hot & Hygienic",
      cta: "Explore Menu",
    },
    {
      img: assets.header_img2,
      title: "Hungry? We Got You.",
      subtitle: "Try our new combos now!",
      cta: "Grab Offer",
    },
  ];

  return (
    <section className="mt-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop
        className="h-[90vh] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center text-center overflow-hidden">
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 text-white px-4 sm:px-8 max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl mb-6">{slide.subtitle}</p>
                <Link
                  to="/menu"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
