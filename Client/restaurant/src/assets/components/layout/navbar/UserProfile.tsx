import React from "react";

const UserProfile: React.FC = () => {
  return (
    <button className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300">
      <span className="sr-only">Open user menu</span>
      <img className="w-8 h-8 rounded-full" src="/path/to/profile.jpg" alt="User Profile" />
    </button>
  );
};

export default UserProfile;
