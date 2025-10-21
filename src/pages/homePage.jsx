import MainSlider from "../components/MainSlider";
import ProductCard from "../components/ProductCards";
import { Link } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import BlogCard from "../components/blogCard";

import menImg from "../assets/pickMen.jpg";
import womenImg from "../assets/pickWomen.jpg";
import accImg from "../assets/pickAcc.jpg";
import kidImg from "../assets/pickKids.jpg";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import ctaImg from "../assets/ctaImg.png";
import blogImg1 from "../assets/blogimg1.jpg";
import blogImg2 from "../assets/blogimg2.jpg";
import blogImg3 from "../assets/blogimg3.jpg";

const categories= [
    {
        title: "MEN",
        imgURL: menImg,
        linkURL: "",
        colSpan: "col-span-full md:col-span-2 md:row-span-2"
    },{
        title: "WOMEN",
        imgURL: womenImg,
        linkURL: "",
        colSpan: "col-span-full md:col-span-1 md:row-span-2"
    },{
        title: "ACCESSORIES",
        imgURL: accImg,
        linkURL: "",
        colSpan: "col-span-full md:col-span-1 md:row-span-1"
    },{ 
        title: "KIDS",
        imgURL: kidImg,
        linkURL: "",
        colSpan: "col-span-full md:col-span-1 md:row-span-1"}
]

const products = [{
    id: 1,
    image: product1,
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    price: '$6.48',
    colors: ['bg-[#23A6F0]', 'bg-[#23856D]', 'bg-[#E77C40]', 'bg-[#252B42]'],
},{ 
    id: 2,
    image: product2,
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    price: '$6.48',
    colors: ['bg-[#23A6F0]', 'bg-[#23856D]', 'bg-[#E77C40]', 'bg-[#252B42]'],
},{
    id: 3,
    image: product3,
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    price: '$6.48',
    colors: ['bg-[#23A6F0]', 'bg-[#23856D]', 'bg-[#E77C40]', 'bg-[#252B42]'],
},{
    id: 4,
    image: product4,
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    price: '$6.48',
    colors: ['bg-[#23A6F0]', 'bg-[#23856D]', 'bg-[#E77C40]', 'bg-[#252B42]'],
},{
    id: 5,
    image: product5,
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    price: '$6.48',
    colors: ['bg-[#23A6F0]', 'bg-[#23856D]', 'bg-[#E77C40]', 'bg-[#252B42]'],
},{
    id: 6,
    image: product6,
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    price: '$6.48',
    colors: ['bg-[#23A6F0]', 'bg-[#23856D]', 'bg-[#E77C40]', 'bg-[#252B42]'],
},{
    id: 7,
    image: product7,
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    price: '$6.48',
    colors: ['bg-[#23A6F0]', 'bg-[#23856D]', 'bg-[#E77C40]', 'bg-[#252B42]'],
},{
    id: 8,
    image: product8,
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '$16.48',
    price: '$6.48',
    colors: ['bg-[#23A6F0]', 'bg-[#23856D]', 'bg-[#E77C40]', 'bg-[#252B42]'],
}]

const blogData = [{
    blogImg: blogImg1,
    tags: ["Google", "Trending", "New"],
    header: "Loudest à la Màdison #1 (L'Integral)",
    abstract: "We focus ergonomics and meeting you where you work. It's only keystroke away",
    date: "22 April 2021",
    commentNumber: 10,
},{
    blogImg: blogImg2,
    tags: ["Google", "Trending", "New"],
    header: "Loudest à la Màdison #1 (L'Integral)",
    abstract: "We focus ergonomics and meeting you where you work. It's only keystroke away",
    date: "22 April 2021",
    commentNumber: 10,
},{
    blogImg: blogImg3,
    tags: ["Google", "Trending", "New"],
    header: "Loudest à la Màdison #1 (L'Integral)",
    abstract: "We focus ergonomics and meeting you where you work. It's only keystroke away",
    date: "22 April 2021",
    commentNumber: 10,
}]
export default function HomePage () {
    return (
        <>
        <div>
            <MainSlider/>
        </div>
        <div className="px-6 py-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-2">EDITOR'S PICK</h2>
            <p className="text-center pb-8 text-[#737373]">Problems trying to resolve the conflict between</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 md:h-[500px] md:gap-6">
            {categories.map((cat,index) => (
                <Link to={cat.linkURL} key={index} className={`relative overflow-hidden md:h-auto ${cat.colSpan}`}>
                    <img src={cat.imgURL} alt={cat.title} className="w-full h-auto md:h-full object-cover "/>
                    <p className="absolute bottom-4 left-4 bg-white text-[#252B42] px-4 py-2 font-semibold">{cat.title}</p>
                </Link>
            ))}
            </div>
        </div>
        <div className="container max-w-5xl mx-auto mb-4 p-4">
           <h3 className="text-xl text-center text-[#737373] pb-4">Featured Products</h3>
           <h2 className="text-2xl font-semibold text-center pb-1">BESTSELLER PRODUCTS</h2>
           <p className="text-center text-[#737373] pb-4">Problems trying to resolve the conflict between</p>
           <div className="flex flex-wrap -mx-2">
                {products.map(product => (
                <div className="w-full md:w-1/4 px-2" key={product.id}>
                    <ProductCard {...product}/>
                </div>))}
            </div>
        </div>
        <div>
            <ProductSlider/>
        </div>
        <div className="flex flex-col-reverse mt-16 md:flex-row items-center md:items-start gap-4">
            <img src={ctaImg} alt="c2a" className="w-full md:w-1/2 h-auto"></img>
            <div className="w-full my-auto md:w-1/2 flex flex-col justify-center items-center md:items-start text-center px-4">
                <h3 className="text-xl md:text-left text-center text-[#BDBDBD] font-bold pb-4">SUMMER 2020</h3>
                <h2 className="text-4xl md:text-left font-semibold text-center pb-4 mb-2">Part of the Neural Universe</h2>
                <p className="text-center md:text-left text-[#737373] pb-4">We know large objects will act, but thing on a small scale</p>
                <div className="flex justify-center md:justify-start gap-4 my-4">
                    <button className="bg-[#2DC071] text-white text-sm font-semibold px-10 py-4 rounded hover:cursor-pointer">BUY NOW</button>
                    <button className="bg-white text-[#2DC071] border border-[#2DC071] text-sm font-semibold px-10 py-4 rounded hover:cursor-pointer">READ MORE</button>
                </div>
            </div>  
        </div>
        <div className="max-w-5xl mx-auto py-16">
            <div className="p-12 text-center">
                <h3 className="text-[#23A6F0] font-semibold pb-4">Practice Advice</h3>
                <h2 className="text-2xl font-semibold text-center pb-2 mx-auto">Featured Posts</h2>
                <p className="text-center text-[#737373] pb-4 w-4/5 mx-auto">
                    Problems trying resolve the conflict between the two major realms of Classical Physics: Newtonian Mechanics
                </p>
            </div> 
            <div className="flex flex-col md:flex-row gap-6">
                {blogData.slice(0,3).map((blog, index) => (
                    <div key={index} className="flex-shrink-0 w-1/2 mx-auto md:w-1/3">
                        <BlogCard
                        blogImg={blog.blogImg}
                        tags={blog.tags}
                        header={blog.header}
                        abstract={blog.abstract}
                        date={blog.date}
                        commentNumber={blog.commentNumber}
                        />
                    </div>
                ))}
            </div>
        </div> 
        </>
    )
}