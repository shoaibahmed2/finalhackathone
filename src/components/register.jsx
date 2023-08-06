import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Registerpage = () => {
  const [passwordVisible, setPasswordVisible] = useState("password");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(passwordVisible === "password" ? "text" : "password");
  };

  const onClickHandler = async () => {
    try {
      setIsSubmitting(true);
      const userDetail = await axios.post("http://localhost:7000/signup", {
        email: emailValue,
        password: passwordValue,
      });
      setIsSubmitting(false);
      toast.success("Registration successful!");
      navigate("/Body");
      // Show success toast
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Registration failed. Please try again."); // Show error toast
      console.log(error, "error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="flex flex-col w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
          Welcome to Layallpur Fashions
        </h2>

        <div className="flex space-x-4">
          <button className="w-1/2 py-2 text-white font-semibold bg-indigo-500 rounded-lg">
            Login
          </button>
          <button className="w-1/2 py-2 text-white font-semibold bg-purple-500 rounded-lg">
            Register
          </button>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Please register yourself and explore the fashion that gives you
          confidence.
        </p>

        <div className="mt-6">
          <label className="block text-gray-600">Email Address</label>
          <input
            className="w-full px-4 py-3 rounded-lg border-gray-300"
            type="email"
            placeholder="Enter your Email Address"
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

        <div className="flex justify-end mt-6">
          <button
            className="px-6 py-3 bg-purple-500 text-white rounded-lg"
            onClick={onClickHandler}
            disabled={isSubmitting}
          >
            Register
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registerpage;
