import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const sidebarItems = [
  { text: "Food Product", icon: "🍔", route: "/food-product" },
  { text: "Inventory", icon: "📦", route: "/inventory" },
];

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation(); // Get current route

  // Toggle sidebar for mobile
  const toggleSidebar = () => setIsExpanded((prev) => !prev);

  // Expand sidebar on hover (Desktop)
  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        id="toggleSidebarMobile"
        aria-expanded={isExpanded}
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-[1100] bg-black text-white px-4 py-2 rounded-lg"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        id="sidebar"
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 mx-2
        h-[30rem] ${isExpanded ? "w-64" : "w-18"} lg:block hidden
        rounded-2xl bg-black text-white transition-all duration-300 ease-in-out flex flex-col pt-6`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Sidebar Items */}
        <div className="flex flex-col items-start space-y-4">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.text}
              to={item.route}
              className={`sidebar-item group flex items-center w-full px-4 py-2 rounded-lg
              transition-all duration-200 ${
                location.pathname === item.route
                  ? "bg-white text-black"
                  : "hover:bg-gray-800"
              }`}
            >
              <div
                className={`icon-wrapper flex items-center justify-center w-10 h-10 rounded-full
                ${location.pathname === item.route ? "bg-black text-white" : "bg-gray-700 group-hover:bg-gray-600"}`}
              >
                <span className="text-lg">{item.icon}</span>
              </div>
              <span
                className={`sidebar-text text-sm text-gray-300 ml-4 transition-all duration-300 whitespace-nowrap 
                ${isExpanded ? "block" : "hidden"}`}
              >
                {item.text}
              </span>
            </NavLink>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
