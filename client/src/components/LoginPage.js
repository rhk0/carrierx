import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import registrationImg from "../assets/images/registrationimg.png";
import { FaEye } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("response",data)
        localStorage.setItem("token", data.token); // Save token
        alert(data.message)
        navigate("/dash"); // Redirect to dashboard
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 md:px-4 px-2">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-full md:w-3/4 overflow-hidden">
        {/* Left Section - Background */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${registrationImg})` }}
        ></div>

        {/* Right Section - Form */}
        <div className="w-full text-gray-500 md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
            Welcome to <span className="text-black">ABC</span>
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Where Financial Wisdom Meets Technology
          </p>

          <h3 className="text-2xl font-semibold text-blue-900 mt-6 md:mt-36">
            Log in with your credentials
          </h3>

          <form className="space-y-4 mt-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-sky-400 rounded-md shadow-sm focus:ring-2 focus:ring-sky-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-sky-400 rounded-md pr-10 shadow-sm focus:ring-2 focus:ring-sky-400 outline-none"
                  required
                />
                <span
                  className="absolute flex text-sm top-1/2 right-3 transform -translate-y-1/2 text-blue-900 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FaEye className="mt-1.5 text-semibold text-md mr-1" />
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="p-6 bg-blue-900 text-white py-2 rounded-md "
            >
              Log in
            </button>
          </form>

          <p className="text-sm text-yellow-500 mt-4 cursor-pointer mb-6 md:mb-36 text-center md:text-left underline">
            Forgot Password
          </p>

          <p className="text-sm text-gray-600 text-center mt-2">
            Don't have an account?{" "}
            <span
              className="text-blue-900 font-semibold cursor-pointer underline"
              onClick={() => navigate("/")}
            >
              Register here
            </span>
          </p>

        </div>


      </div>
    </div>
  );
};

export default LoginPage;
