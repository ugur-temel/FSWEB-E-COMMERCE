import { Facebook, Instagram, Twitter} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer () {

    return(
        <footer className="mt-12 px-6 md: px-20 py-12">
            
            <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col bg-[#FAFAFA] md:flex-row justify-between items-center border-b border-color-[#E6E6E6]">
                    <h1 className="text-2xl text-color-[#252B42] font-bold">Bandage</h1>
                <div className="flex space-x-4 mt-4 text-[#23A6F0] justify-items-end"> 
                    <a href="#"> <Facebook size={20}/> </a>
                    <a href="#"> <Instagram size={20}/> </a>
                    <a href="#"> <Twitter size={20}/></a>
                </div>
            </div>
            
            <div className="flex flex-col max-w-7xl mx-auto px-4 py-12 md:grid grid-cols-5 gap-4">
                <div>
                    <h3 className="font-bold text-[#252B42] mb-4">Company Info</h3>
                    <ul className="space-y-2 text-[#737373] font-semibold">
                        <li><Link to={"/"}>About Us</Link></li>
                        <li><Link to={"/"}>Carrier</Link></li>
                        <li><Link to={"/"}>We are hiring</Link></li>
                        <li><Link to={"/"}>Blog</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-[#252B42] mb-4">Features</h3>
                    <ul className="space-y-2 text-[#737373] font-semibold">
                        <li><Link to={"/"}>Business Marketing</Link></li>
                        <li><Link to={"/"}>User Analytics</Link></li>
                        <li><Link to={"/"}>Live Chat</Link></li>
                        <li><Link to={"/"}>Unlimited Support</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-[#252B42] mb-4">Resources</h3>
                    <ul className="space-y-2 text-[#737373] font-semibold">
                        <li><Link to={"/"}>IOS & Android</Link></li>
                        <li><Link to={"/"}>Watch a Demo</Link></li>
                        <li><Link to={"/"}>Customers</Link></li>
                        <li><Link to={"/"}>API</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-[#252B42] mb-4">Get In Touch </h3>
                    <form className="space-y-2">
                        <div className="flex w-full max-w-sm overflow-visible">
                            <input type="email" placeholder="Your email" className="flex-1 p-2.5 text-sm font-medium rounded-l-lg border-1 border-[#737373] bg-[#FAFAFA] focus:outline-none"/>
                            <button type="submit" className="bg-[#23A6F0] text-white p-2.5 rounded-r-lg hover:cursor-pointer">Subscribe</button>
                        </div>
                        <p className="text-xs text-[#737373]">Lorem ipsum dolor sit amet</p>
                    </form>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto p-4 text-left bg-[#FAFAFA]">
                <p className="text-sm text-[#737373] font-semibold">Made with love by Finland All Right Reserved</p>
            </div>
        </footer>
    );
};