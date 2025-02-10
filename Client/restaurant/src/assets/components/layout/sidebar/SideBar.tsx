import React from "react";
import { SidebarItem } from ".";


const Sidebar: React.FC = () => {
  const sidebarItems = [
    { text: "Food Product", icon: "VF", route: "/food-product" },
    { text: "Inventory", icon: "AS", route: "/inventory" },
  ];

  return (
    <aside
      id="sidebar"
      className="z-[1000] fixed left-0 mx-2 top-1/2 transform -translate-y-1/2 
      h-[30rem] w-18 hover:w-64 lg:block hidden 
      rounded-[24px] bg-black text-white transition-all 
      duration-150 ease-in-out flex flex-col pt-6 font-normal"
    >
      <div className="flex flex-col items-start space-y-4">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.text} {...item} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
