import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useHistory } from "react-router-dom";
import carouselImg from "../assets/carouselImg.jpg";

const slides = [
    {
        id:1,
        subtitle: "SUMMER 2020",
        title: "NEW COLLECTION",
        description: "We know how large objects will act, but things on a small scale.",
        buttonText: "Shop Now",
        buttonLink: "#",
        image: carouselImg,
    },{
        id:2,
        subtitle: "SUMMER 2020",
        title: "NEW COLLECTION",
        description: "We know how large objects will act, but things on a small scale.",
        buttonText: "Shop Now",
        buttonLink: "#",
        image: carouselImg,
    }
]

export default function MainSlider () {
    const history = useHistory();
    const handleRedirect = (link) => {
        history.push(link);
    }
    return ( 
    <div className="w-full max-w-7xl mx-auto px-4 relative">
        <Swiper
          modules= {[Navigation, Pagination]}
          navigation
          pagination={{clickable: true}}
          loop
          className="relative"
          >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div onClick={() => handleRedirect(slide.buttonLink)} className="relative w-full h-[640px] hover:cursor-pointer">
                        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover"/>
                        <div className="absolute inset-1 flex flex-col items-start justify-center px-8 text-white md:px-16">
                            <h3 className="text-base ml-4 my-2">{slide.subtitle}</h3>
                            <h2 className="text-4xl font-bold m-4">{slide.title}</h2>
                            <p className="text-base font-medium max-w-md ml-4 my-6">{slide.description}</p>
                            <p className="bg-[#2DC071] px-6 py-4 ml-4 rounded uppercase text-bold"> {slide.buttonText} </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}   
        </Swiper>

        <style jsx>{`
        
        .swiper-pagination-bullet {
          width: 63px;
          height: 10px;
          background-color: white;
          border-radius: 0px;
          opacity: 0.5;
          margin: 0 1px;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }

        
        .swiper-pagination {
          bottom: 16px;
        }

        /* Navigation arrows */
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
        }
      `}</style>
    </div>
    )
} 