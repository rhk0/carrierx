import { useState } from "react";
import graf1 from "../assets/images/graf1.png";
import graf2 from "../assets/images/graf2.png";
import grafleft from "../assets/images/grafleft.png";
import grafright from "../assets/images/grafright.png";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "", value: 500 },
  { name: "", value: 150 },
  { name: "", value: 600 },
  { name: "", value: 90 },
  { name: "", value: 300 },
  { name: "", value: 110 },
  { name: "", value: 800 },
  { name: "", value: 120 },
  { name: "", value: 95 },
  { name: "", value: 400 },
  { name: "", value: 110 },
  { name: "", value: 1100 },
];

function FormPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <div className="flex h-screen">
          <button
            className="lg:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded-md"
            onClick={() => setIsOpen(true)}
          >
            <FaBars size={20} />
          </button>

          {/* Sidebar */}
          <div
            className={`fixed lg:relative top-0 left-0 h-full w-64 bg-white shadow-md flex flex-col justify-between transition-all duration-300 z-50 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
          >
            {/* Close Button for Mobile */}
            <button
              className="lg:hidden absolute top-4 right-4 text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={20} />
            </button>

            <div>
              <div className="p-6">
                <h1 className="text-2xl font-bold text-purple-600 flex items-center">
                  <MdDashboard className="mr-2" /> Dashboard
                </h1>
              </div>
              <nav className="mt-6">
                {[
                  { icon: "fas fa-tachometer-alt", label: "Activity" },
                  { icon: "fas fa-book", label: "Library" },
                  { icon: "fas fa-shield-alt", label: "Security" },
                  { icon: "fas fa-calendar-alt", label: "Schedules" },
                  { icon: "fas fa-money-bill-wave", label: "Payouts" },
                  { icon: "fas fa-cog", label: "Settings" },
                ].map((item, index) => (
                  <a
                    key={index}
                    className="flex items-center p-2 text-gray-700 hover:bg-gray-200"
                    href="#"
                  >
                    <i className={`${item.icon} text-gray-600`}></i>
                    <span className="ml-3">{item.label}</span>
                  </a>
                ))}
              </nav>
              
            </div>
            <div className="p-5 ">
                <button className="px-16 bg-gradient-to-r from-violet-300 to-violet-500 text-black py-2 px-4 rounded-2xl">
                  Upgrade to PRO to get access to all features!
                </button>
              </div>
          </div>

          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          <div className="flex-1 p-6 overflow-auto bg-green-50">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <h2 className="text-3xl font-bold">
                <span className="text-sm">Hi Andrei,</span>
                <br /> Welcome to Venus!
              </h2>

              <div className="relative">
                <input
                  className="bg-white rounded py-2 px-12 pl-10"
                  placeholder="Search"
                  type="text"
                />
                <i className="fas fa-search absolute left-3 top-3 text-gray-500"></i>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-lg shadow-md relative"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(128,0,128,0.7), rgba(0,0,255,0.7)), url(${grafleft})`,
                  backgroundPosition: "right center", // Image ko right side position karega
                  backgroundSize: "contain", // Image ka size adjust karega bina crop kiye
                  backgroundRepeat: "no-repeat", // Image repeat hone se rokega
                  height: "150px", // Adjust according to your need
                  width: "100%", // Full width rakhne ke liye
                }}
              >
                <h3 className="text-lg">Activity</h3>
                <p className="text-2xl font-bold">$540.50</p>
              </div>

              <div
                className="bg-white p-6 rounded-lg shadow-md bg-cover relative"
                style={{
                  backgroundImage: `url(${graf1})`,
                  backgroundPosition: "right center", // Image ko right align karega
                  backgroundSize: "contain", // Image ki height/width ko adjust karega bina crop kiye
                  backgroundRepeat: "no-repeat", // Image ko repeat hone se rokega
                  height: "150px", // Adjust according to your need
                  width: "100%", // Full width rakhne ke liye
                }}
              >
                <h3 className="text-lg">Spent this month</h3>
                <p className="text-2xl font-bold">$682.5</p>
              </div>

              <div
                className=" h-32 bg-white rounded-lg bg-cover flex items-center justify-between p-4"
                style={{
                  backgroundImage: `url(${graf2})`,
                  backgroundPosition: "left center", // Image ko left align karega
                  backgroundSize: "contain", // Image ki height/width ko adjust karega bina crop kiye
                  backgroundRepeat: "no-repeat", // Image ko repeat hone se rokega
                  height: "150px",
                  width: "100%",
                }}
              >
                <div className="w-1/2"></div>{" "}
                {/* Empty div for left image alignment */}
                <div className="text-right w-1/2">
                  {" "}
                  {/* Content ko right align karne ke liye */}
                  <h3 className="text-lg">Earnings</h3>
                  <p className="text-2xl font-bold">$350.40</p>
                </div>
              </div>

              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-lg shadow-md relative"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(128,0,128,0.7), rgba(0,0,255,0.7)), url(${grafright})`,
                  backgroundPosition: "right center", // Image ko right side position karega
                  backgroundSize: "contain", // Image ka size adjust karega bina crop kiye
                  backgroundRepeat: "no-repeat", // Image repeat hone se rokega
                  height: "150px", // Adjust according to your need
                  width: "100%", // Full width rakhne ke liye
                }}
              >
                <h3 className="text-lg">Activity</h3>
                <p className="text-2xl font-bold">$540.50</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 mt-6">
              {/* graf section start */}
              <div className="bg-white p-6 rounded-xl lg:w-3/4 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">
                    Balance <span className="text-green-500">● On track</span>
                  </h2>
                  <span className="text-gray-500">Monthly ▼</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Saves</p>
                    <p className="text-2xl font-bold">
                      43.50%{" "}
                      <span className="text-green-500 text-sm">+2.45%</span>
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Balance</p>
                    <p className="text-2xl font-bold">
                      $52,422{" "}
                      <span className="text-red-500 text-sm">-4.75%</span>
                    </p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorValue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#8884d8"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#8884d8"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="name" tick={false} axisLine={false} />
                    <YAxis hide />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      fillOpacity={1}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                    
              </div>

              {/* graf section end */}

              <div className="bg-white p-6 rounded-lg shadow-md lg:w-1/4">
                <h3 className="text-lg font-bold">Your Transfers</h3>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        alt="Profile picture of Alex Manda"
                        className="rounded-full w-10 h-10"
                        height="100"
                        src="https://storage.googleapis.com/a1aa/image/i_NTVKpdNl_HqoGmBr8umfaPfBSDuqj6DXondtl2eDQ.jpg"
                        width="100"
                      />
                      <div className="ml-3">
                        <p>From Alex Manda</p>
                        <span className="text-gray-500 text-sm">
                          Today, 16:36
                        </span>
                      </div>
                    </div>
                    <span className="text-green-500">+$50</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <img
                        alt="Profile picture of Laura Santos"
                        className="rounded-full w-10 h-10"
                        height="100"
                        src="https://storage.googleapis.com/a1aa/image/AnnQ7YANRz1mACzCLf3D5cFZRtyVwfGsJFvdJrDSSOQ.jpg"
                        width="100"
                      />
                      <div className="ml-3">
                        <p>To Laura Santos</p>
                        <span className="text-gray-500 text-sm">
                          Today, 08:49
                        </span>
                      </div>
                    </div>
                    <span className="text-red-500">-$27</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <img
                        alt="Profile picture of Jadon S."
                        className="rounded-full w-10 h-10"
                        height="100"
                        src="https://storage.googleapis.com/a1aa/image/6u0IS57KQItJC50-azCw1-dvsSxoR7mk9_UxvfSF7fM.jpg"
                        width="100"
                      />
                      <div className="ml-3">
                        <p>From Jadon S.</p>
                        <span className="text-gray-500 text-sm">
                          Yesterday, 14:36
                        </span>
                      </div>
                    </div>
                    <span className="text-green-500">+$157</span>
                  </div>
                  <a className="text-blue-500 mt-4 block text-right" href="#">
                    View all
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mt-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:w-1/4">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-6 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm">Credit Balance</p>
                      <p className="text-3xl font-bold">$25,215</p>
                    </div>
                    <div>
                      <i className="fas fa-wave-square text-2xl"></i>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-500 mb-4">Recent</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        alt="Building icon"
                        className="w-8 h-8 rounded-full bg-blue-100 p-1"
                        height="32"
                        src="https://storage.googleapis.com/a1aa/image/UYz0LMY-soJSN7phmX1IfNOc6xjh5mWz4kxFqDbNEzo.jpg"
                        width="32"
                      />
                      <div className="ml-3">
                        <p className="text-gray-800">Bill &amp; Taxes</p>
                        <p className="text-gray-500 text-sm">Today, 16:36</p>
                      </div>
                    </div>
                    <p className="text-red-500">-$154.50</p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        alt="Car icon"
                        className="w-8 h-8 rounded-full bg-green-100 p-1"
                        height="32"
                        src="https://storage.googleapis.com/a1aa/image/K8fs64SQXQyv3ewcJTJQZCkTEEz8iQwA7p3BngU_9ts.jpg"
                        width="32"
                      />
                      <div className="ml-3">
                        <p className="text-gray-800">Car Energy</p>
                        <p className="text-gray-500 text-sm">23 Jun, 13:06</p>
                      </div>
                    </div>
                    <p className="text-red-500">-$40.50</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        alt="Design icon"
                        className="w-8 h-8 rounded-full bg-yellow-100 p-1"
                        height="32"
                        src="https://storage.googleapis.com/a1aa/image/S9CxnTTZGlayJnUTPk4lgB_vhWFBrqKL2tmko88COW4.jpg"
                        width="32"
                      />
                      <div className="ml-3">
                        <p className="text-gray-800">Design Course</p>
                        <p className="text-gray-500 text-sm">21 Jun, 19:04</p>
                      </div>
                    </div>
                    <p className="text-red-500">-$70.00</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 flex items-center space-x-8 max-w-6xl lg:w-3/4 ">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-[#1f1f1f] mb-4">
                    Try Venus for free now!
                  </h1>
                  <p className="text-[#6b7280] mb-6">
                    Enter in this creative world. Venus is the best product for
                    your business.
                  </p>
                  <div className="flex items-center space-x-4">
                    <button className="bg-[#4a00e0] text-sm text-nowrap  text-white font-bold py-2 px-6 rounded-full">
                      Try for free
                    </button>
                    <button className="text-[#6b7280] font-bold">Skip</button>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    alt="A collage of various app screens and icons, including a QR scan, a manage screen, and other UI elements"
                    className="rounded-lg"
                    height="300"
                    src="https://storage.googleapis.com/a1aa/image/Nh9n8NljSpZC9cipiwHeEFpFVWPw4XJx1tu2pt9pB0M.jpg"
                    width="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPage;
