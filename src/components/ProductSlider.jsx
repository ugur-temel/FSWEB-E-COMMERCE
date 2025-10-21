import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useHistory } from "react-router-dom";
import productSliderImg from "../assets/productSliderImg.png";

const slides = [
    {
        id:1,
        subtitle: "SUMMER 2020",
        title: "Vita Classic Product",
        description: "We know how large objects will act, We know how large objects will act, We know",
        priceTag: "$ 16.48",
        buttonText: "Add to Cart",
        buttonLink: "#",
        image: productSliderImg,
    },{
        id:2,
        subtitle: "SUMMER 2020",
        title: "Vita Classic Product",
        description: "We know how large objects will act, We know how large objects will act, We know",
        priceTag: "$ 16.48",
        buttonText: "Add to Cart",
        buttonLink: "#",
        image: productSliderImg,
    }
]

export default function ProductSlider () {
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
                    <div onClick={() => handleRedirect(slide.buttonLink)} className="flex flex-col md:flex-row items-center justify-between w-full bg-[#23856D] min-h-[640px] px-8 hover:cursor-pointer md:px-16">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left text-white w-full md:w-1/2 space-y-4 z-10">
                            <h3 className="text-base ml-4 my-2">{slide.subtitle}</h3>
                            <h2 className="text-4xl md:text-5xl font-bold m-4 leading-tight">{slide.title}</h2>
                            <p className="text-base font-medium max-w-md ml-4 my-6 max-w-md">{slide.description}</p>
                            <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                                <p className="text-base font-semibold ml-4 " >{slide.priceTag}</p>
                                <p className="bg-[#2DC071] px-6 py-4 ml-4 rounded uppercase text-bold"> {slide.buttonText} </p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-10 md:mt-0 w-full md:w-1/2"> 
                             <img src={slide.image} alt={slide.title} className="md:absolute bottom-0 max-h-[400px] md:max-h-[550px] w-auto object-contain"/>
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
          bottom: 0;
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