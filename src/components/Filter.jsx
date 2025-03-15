import "react";
import {RiArrowDownWideLine} from "react-icons/ri";
const Filter = () => {
  return (
    <div
    
      className="pl-8 pr-3 py-3 bg-[var(--gray)] h-fit w-fit text-xl border-2 shadow-lg text-[var(--text)] font-bold rounded-lg cursor-pointer flex justify-between hover:drop-shadow transition">
      <div className=" mr-9">All</div>
      <div className="ml-10">
        <RiArrowDownWideLine className="mt-1 w-6 h-6 text-[var(--text)] " />
      </div>
    </div>
  );
};

export default Filter;
