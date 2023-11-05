import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image: "/images/Category/Programming-Language.jpg",
      title: "Programming Language",
    },
    {
      image: "/images/Category/Web-Dev.avif",
      title: "Web Development",
    },
    {
      image: "/images/Category/Mobile-Dev.jpg",
      title: "Mobile Development",
    },
    {
      image: "/images/Category/Data-Science.avif",
      title: "Data Science",
    },
    {
      image: "/images/Category/Database.avif",
      title: "Database",
    },
    {
      image: "/images/Category/Cloud-computing.avif",
      title: "Cloud Computing",
    },
    {
      image: "/images/Category/Game-Dev.jpg",
      title: "Game Development",
    },
  ];

  const sliderStyle = {
    width: "40%",
    margin: "0 auto",
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const imageStyle = {
    width: "100%", // Görselin genişliği
    height: "auto", // Görselin yüksekliği otomatik ayarlanır
  };

  return (
    <div className="relative" data-te-carousel-init data-te-carousel-slide style={sliderStyle}>
      <button className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" onClick={handlePrevClick}>
        <span className="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
        {slides.map((slide, index) => (
          <button
            key={index}
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to={index}
            data-te-carousel-active={index === 0 ? true : undefined}
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={`relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`} data-te-carousel-active={index === 0 ? true : undefined} data-te-carousel-item style={{ backfaceVisibility: 'hidden' }}>
            <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{ backgroundPosition: '50%', width: '100%', height: '380px' }}>
              <img src={slide.image} className="block w-full" style={imageStyle} />
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
            </div>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">{slide.title}</h5>
            </div>
          </div>
        ))}
      </Slider>
      <button className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" onClick={handleNextClick}>
        <span className="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
      </button>
    </div>
  );
}

export default Gallery;
