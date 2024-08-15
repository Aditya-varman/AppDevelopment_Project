import React, { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/userContext";
import axios from "axios";

const Login = ({ onSwitchToRegister }) => {
  const { updateUserId } = useUser();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Authenticate the user using your login function
      await login(formData.email, formData.password);

      // Fetch user data from the backend
      const response = await axios.post("http://localhost:8080/register/login", formData);
      if (response.status === 200) {
        const user = response.data; // Assuming the response contains user data

        console.log("User",user);
        if (user && user.id) {
          updateUserId(user.id); // Update the userId in context
          navigate("/"); // Redirect to a protected route after login
        } else {
          alert("User data is not available.");
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Failed to log in. Please check your credentials.");
    }
  };

  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to the Register page
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Login Form with Caresure Health Insurance
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <form onSubmit={handleLogin}>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="email" // Changed to "email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative mt-4">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={handleRegisterClick}
                      className="text-blue-500 hover:text-blue-700 font-bold"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
