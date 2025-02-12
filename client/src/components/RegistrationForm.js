import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import registrationImg from "../assets/images/registrationimg.png";
import { IoMdCloseCircleOutline } from "react-icons/io";
const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    nationality: "",
    dob: "",
    gender: "",
    occupation: "",
    experience: "",
    website: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Check for required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "mobileNumber",
      "email",
      "nationality",
      "dob",
      "gender",
      "occupation",
      "experience",
      "password",
      "confirmPassword",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(
        `Please fill in the following required fields: ${missingFields.join(
          ", "
        )}`
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful! Please log in.");
        navigate("/login");
      } else {
        setError(data.message || "Registration failed. Try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl w-full max-w-4xl overflow-hidden">
        {/* Left Section - Background Image */}
        <div
          className="w-full md:w-1/2 h-56 md:h-auto bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${registrationImg})` }}
        ></div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-semibold text-blue-900">
            Welcome to <span className="text-black">ABC</span>
          </h2>
          <p className="text-gray-500 text-lg mb-6">
            Where Financial Wisdom Meets Technology
          </p>
          <h2 className="text-2xl font-semibold text-blue-900 mb-5">Sign Up</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-sky-400 rounded-md shadow-sm outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-sky-400 rounded-md shadow-sm outline-none"
                required
              />
            </div>
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-3 border border-sky-400 rounded-md shadow-sm outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-sky-400 rounded-md shadow-sm outline-none"
              required
            />
            <select
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full p-3 border border-sky-400 rounded-md shadow-sm outline-none"
            >
              <option>Nationality</option>
              <option>Indian</option>
              <option>American</option>
              <option>British</option>
              <option>Canadian</option>
            </select>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 border border-sky-400 rounded-md shadow-sm outline-none"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border border-sky-400 rounded-md shadow-sm outline-none"
            >
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <select
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full p-3 border border-sky-400 rounded-md shadow-sm outline-none"
            >
              <option>Please select occupation</option>
              <option>Software Engineer</option>
              <option>Doctor</option>
              <option>Teacher</option>
              <option>Artist</option>
            </select>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-3 border border-sky-400 rounded-md shadow-sm outline-none"
            >
              <option>Please select years of experience</option>
              <option value={1}>1 Year</option>
              <option value={2}>2 Years</option>
              <option value={5}>5+ Years</option>
            </select>
            <input
              type="text"
              name="website"
              placeholder="Website (Optional)"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-3 border border-sky-400 rounded-md shadow-sm outline-none"
            />

            {/* Password Fields */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-sky-400 rounded-md shadow-sm outline-none"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-4 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex items-center text-sm ">
              <button className="w-7 h-6 border border-blue-500  bg-blue-900 text-white rounded-full flex items-center justify-center mr-2 text-lg">
                <IoMdCloseCircleOutline className="text-white" />
              </button>
              <span>
                Between 8 and 20 characters, 1 uppercase letter, 1 or more
                numbers, 1 or more special characters
              </span>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border border-sky-400 rounded-md shadow-sm outline-none"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-4 text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button className="p-4 bg-blue-900 text-white rounded-md ">
              Create Account
            </button>
          </form>

          <p className="text-md text-gray-500 mt-4">
            By creating an account, you agree to our{" "}
            <span className="text-blue-900">Terms & Policies</span>
            Already have an account?{" "}
            <span
              className="text-blue-900 font-semibold cursor-pointer underline"
              onClick={() => navigate("/login")}
            >
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
