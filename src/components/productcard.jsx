import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ imageUrl, title, price }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate(`/product/${encodeURIComponent(title)}`, {
      state: { imageUrl, title, price },
    });
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{price}</p>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-black font-bold text-sm py-2 px-4 rounded-full"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
