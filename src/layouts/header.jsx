import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Facebook, Heart, Instagram, Mail, Menu, Phone, Search, ShoppingCart, Twitter, User, X, Youtube } from "lucide-react";
import Dropdown from "../components/Dropdown";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState();
    const [isDropdownOpen, setIsDropdownOpen] = useState();

    return (
        <header className="w-full">
           <div className="hidden md:block w-full bg-[#252B42] text-white test-sm">
            <div className="max-w-7xl flex mx-auto px-4 py-2 justify-between items-center">
                <div className="flex space-x-6 items-center">
                    <div className="flex items-center space-x-2">
                        <Phone size={16}/>
                        <span>(225) 555-0118</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail size={16}/>
                        <span>michelle.expera@example.com</span>
                    </div>
                </div>
                <div className="flex-1 text-center truncate">Follow us and get a chance to %80 off</div>
                <div className="flex items-center gap-2">
                    <p>Follow us  :</p>
                    <a href="#" className="hover:text-[#23A6F0]"> <Instagram size={16}/></a>
                    <a href="#" className="hover:text-[#23A6F0]"> <Youtube size={16}/> </a> 
                    <a href="#" className="hover:text-[#23A6F0]"> <Facebook size={16}/></a>
                    <a href="#" className="hover:text-[#23A6F0]"> <Twitter size={16}/></a>
                </div>
            </div>
           </div>

           <div className="bg-white ">
                <div className="max-w-7xl flex mx-auto p-4 justify-between items-center">
                    <span className="text-2xl font-bold items-center text-[#252B42]">Bandage</span>
                    <nav className="hidden md:flex gap-6 text-sm font-semibold items-center text-neutral-500">
                    <NavLink exact to="/" className="hover:[#23A6F0]" activeClassName="text-[#252B42]">Home</NavLink>
                    <div className="relative" 
                    onMouseEnter={() => setIsDropdownOpen(true)} 
                    onMouseLeave={() => setIsDropdownOpen(false)}>
                        <NavLink to="#" 
                        className="flex items-center gap-1 hover:text-blue-500" activeClassName="text-[#252B42]">
                            Shop <ChevronDown size={16}/></NavLink>
                            {isDropdownOpen && <div className="absolute left-0 top-full mt-1 z-50 bg-[#FAFAFA]"> <Dropdown/> </div>}
                    </div>
                    <NavLink to="#" className="hover:text-[#23A6F0]" activeClassName="text-[#252B42]">About</NavLink>
                    <NavLink to="#" className="hover:text-[#23A6F0]" activeClassName="text-[#252B42]">Blog</NavLink>
                    <NavLink to="#" className="hover:text-[#23A6F0]" activeClassName="text-[#252B42]">Contact</NavLink>
                    <NavLink to="#" className="hover:text-[#23A6F0]" activeClassName="text-[#252B42]">Pages</NavLink>
                    </nav>

                    <div className="hidden md:flex items-center gap-4 text-blue-500 text-sm font-semibold">
                        <NavLink to="#" className="flex items-center gap-1 hover:text-[#252B42]"><User size={16}/> Login / Register</NavLink>
                        <div className="relative flex items-center gap-1 hover:text-[#252B42]">
                            <NavLink to="#"><ShoppingCart size={16}/></NavLink>
                            <span>1</span>
                        </div>
                        <div className="relative flex items-center gap-1 hover:text-[#252B42]">
                            <NavLink to="#"><Heart size={16}/></NavLink>
                            <span>1</span>    
                        </div>
                    </div>

                    <div className="flex items-center gap-4 md:hidden">
                        <User size={16}/>
                        <Search size={16}/>
                        <ShoppingCart size={16}/>
                        <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
                    </div>
                </div>
                {menuOpen && 
                (<nav className="flex flex-col items-center bg-white p-4 gap-3 text-neutral-500 md:hidden">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="#">Product</NavLink>
                    <NavLink to="#">Pricing</NavLink>
                    <NavLink to="#">Contact</NavLink>
                </nav>
                )}
            </div>
        </header>
    );
};
