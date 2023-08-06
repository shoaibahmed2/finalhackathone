import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productResponse = await axios.get(
        "http://localhost:7000/allproducts"
      );
      setProducts(productResponse.data); // Assuming the response contains the 'data' property with the product array
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="bg-gray-800 p-6 rounded-lg mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Add Products
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((item) => (
              <li key={item._id}>
                <div className="bg-white p-6 shadow-md rounded-lg">
                  <p className="text-gray-700">
                    <strong>Name:</strong> {item.name}
                    <br />
                    <strong>Category:</strong> {item.category}
                    <br />
                    <strong>Price:</strong> {item.price}
                    <br />
                    <strong>Color:</strong> {item.color}
                    <br />
                    <strong>Size:</strong> {item.size}
                    <br />
                    <strong>Image:</strong> {}
                    <img
                      src={item.imageUrl} // Replace with the actual image URL property from your data
                      alt={item.name}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
