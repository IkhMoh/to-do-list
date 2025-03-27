import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

const Settings = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold grid text-5xl md:text-6xl relative text-[var(--text)]">
          <MdKeyboardBackspace className="drop-shadow-lg justify-self-start h-14 w-14 ml-6 mt-5  text-gray-500 hover:bg-[#dfdfdf] transition rounded-full" />
          <span className="justify-self-center mt-3 absolute ">Settings</span>
        </h1>
      </div>
      {/* mmmm */}
      <div className="w-7/7 mt-12 sm:w-4/7 md:w-4/7  max-h-96 min-h-80 mx-auto  rounded-lg  bg-[var(--graylite)]  drop-shadow"></div>
    </div>
  );
};

export default Settings;
