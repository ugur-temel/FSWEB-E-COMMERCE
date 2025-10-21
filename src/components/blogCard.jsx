import { AlarmClock, ChartLine, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({blogImg,tags,header,abstract,date,commentNumber}) => {
    return(
        <Link to={``} className="block w-full bg-white shadow-md">
            <div>
                <div className="relative">
                    <img src={blogImg} alt="blogImg" className="w-full h-56 object-cover"/>
                    <p className="absolute left-2 top-2 bg-[#E74040] text-white font-semibold px-2 py-1">NEW</p>
                </div>
                <div className="flex flex-col p-6 h-full">
                    <div className="">
                        {tags.map((tag,index) => (
                        <span key={index} className="text-xs text-[#737373] mb-4 gap-2 pr-4">{tag}</span>))}
                    </div>
                    <p className="text-lg font-semibold mb-2">{header}</p>
                    <p className="text-[#737373] text-sm font-semibold mb-4 flex-grow">{abstract}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-[#737373] p-6 mx-auto mb-4">
                    <p className="flex items-center gap-1"><AlarmClock size={14} className="text-[#23A6F0]"/>  {date}</p>
                    <p className="flex items-center gap-1"><ChartLine size={14} className="text-[#23856D]"/> {commentNumber} comments</p>
                </div>
                <span className="inline-flex items-center text-[#737373] font-medium ml-6 mb-8 mt-auto gap-1">Learn More<ChevronRight size={24} className="text-[#23A6F0]"/></span>
            </div>
        </Link>
    )
}

export default BlogCard;