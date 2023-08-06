import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    color: "",
    size: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const addData = await axios.post("http://localhost:7000/addData", formData);
      setIsSubmitting(false);
      navigate("/Body");
      // Show success toast or appropriate feedback to the user
    } catch (error) {
      setIsSubmitting(false);
      // Show error toast or appropriate feedback to the user
      console.log(error, "error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-gray-200 p-3 rounded-md">
              <label htmlFor="name" className="block text-sm font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="bg-gray-200 p-3 rounded-md">
              <label htmlFor="category" className="block text-sm font-medium">
                Category:
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="col-span-2 bg-gray-200 p-3 rounded-md">
              <label htmlFor="description" className="block text-sm font-medium">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="bg-gray-200 p-3 rounded-md">
              <label htmlFor="price" className="block text-sm font-medium">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="bg-gray-200 p-3 rounded-md">
              <label htmlFor="color" className="block text-sm font-medium">
                Color:
              </label>
              <input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="bg-gray-200 p-3 rounded-md">
              <label htmlFor="size" className="block text-sm font-medium">
                Size:
              </label>
              <input
                type="text"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="bg-gray-200 p-3 rounded-md">
              <label htmlFor="category" className="block text-sm font-medium">
                Image:
              </label>
              <input
               
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
