import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
    return(
        <div className="flex flex-row w-[396px] h-[272px] items-center  gap-x-24 p-6 pl-4 z-50">
            <div className="flex flex-col h-full jusify-start">
                <Link to={"/"} className="font-bold text-[#252B42] mt-6 mb-8 block">Kadın</Link>
                    <ul className="space-y-4 text-[#737373] font-semibold">
                        <li><Link to={"/"}>Bags</Link></li>
                        <li><Link to={"/"}>Belts</Link></li>
                        <li><Link to={"/"}>Cosmetics</Link></li>
                        <li><Link to={"/"}>Hats</Link></li>
                    </ul>
            </div>
            <div className="flex flex-col h-full jusify-start">
                <Link to={"/"} className="font-bold text-[#252B42] mt-6 mb-8 block">Erkek</Link>
                    <ul className="space-y-4 text-[#737373] font-semibold">
                        <li><Link to={"/"}>Bags</Link></li>
                        <li><Link to={"/"}>Belts</Link></li>
                        <li><Link to={"/"}>Cosmetics</Link></li>
                        <li><Link to={"/"}>Hats</Link></li>
                    </ul>
            </div>
        </div>
    )
} 

export default Dropdown;