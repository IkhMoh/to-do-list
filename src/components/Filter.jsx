import "react";
import { RiArrowDownWideLine } from "react-icons/ri";
const Filter = () => {
  return (
    <div className="pl-5 sm:pl-8 pr-2 sm:pr-3 space-x-12 md:space-x-20 py-1.5 sm:py-2.5 bg-[var(--gray)] h-fit w-fit md:text-xl border-2 border-gray-300 shadow-lg text-[var(--text)] font-bold rounded-lg cursor-pointer flex justify-between hover:drop-shadow transition">
      <div className=" ">All</div>
      <div className="">
        <RiArrowDownWideLine className="mt-1 w-6 h-6 text-[var(--text)] " />
      </div>
    </div>
  );
};

export default Filter;
