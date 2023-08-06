import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Loginpage = () => {
  const [passwordVisible, setPasswordVisible] = useState("password");
  const togglePasswordVisibility = () => {
    setPasswordVisible(passwordVisible === "password" ? "text" : "password");
  };

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClickHandler = async () => {
    try {
      setIsSubmitting(true);
      const response = await axios.post("http://localhost:7000/signin", {
        email: emailValue,
        password: passwordValue,
      });

      setIsSubmitting(false);
      if (response.data) {
        toast.success("Login successful!");  
      } else {
        toast.error("Login failed. Please check your credentials.");  
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Login failed. Please try again."); 
      console.log(error, "error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-500 to-blue-500">
      <div className="flex flex-col w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
          Welcome to Layallpur Fashions{" "}
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Please Login and explore the fashion that gives you confidence.
        </p>

        <div className="mt-6">
          <label className="block text-gray-600">Email Address</label>
          <input
            className="w-full px-4 py-3 rounded-lg border-gray-300"
            type="email"
            placeholder="Enter your Email address"
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-600">Password</label>
          <div className="relative">
            <input
              className="w-full px-4 py-3 rounded-lg border-gray-300"
              type={passwordVisible}
              placeholder="Enter your password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <button
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-3 transform -translate-y-1/2"
            >
              {/* You can add an SVG eye icon here */}
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600">Remember me</p>
          </div>
          <p className="text-gray-600">Forgot Password?</p>
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-3 bg-teal-500 text-white rounded-lg"
            onClick={onClickHandler}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging In..." : "Login"}
          </button>
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer here */}
    </div>
  );
};

export default Loginpage;
