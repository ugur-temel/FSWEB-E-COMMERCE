import { Link } from "react-router-dom";

const ProductCard = ({id, image, title, department, oldPrice, price, colors}) => {
    return(
        <Link to={`product/${id}`} className="block bg-white">
        <div className="my-8">
            <img src={image} alt={title} className="w-full h-auto mb-4"/>
            <div>
                <h3 className="text-base text-center py-1 font-bold">{title}</h3>
                <h4 className="text-sm text-center py-1 text-[#737373]">{department}</h4>
                <div className="flex items-center py-1 justify-center space-x-2 font-bold">
                    <p className="text-sm text-[#BDBDBD]">{oldPrice}</p>
                    <p className="text-sm text-[#23856D]">{price}</p>
                </div>    
            </div>
            <div className="flex items-center justify-center space-x-2 mt-3">
                {colors.map((color,index) => 
                    (<span key={index} className={`w-3 h-3 rounded-full ${color}`}></span>))}
            </div>
        </div>
        </Link>
    );
}

export default ProductCard;