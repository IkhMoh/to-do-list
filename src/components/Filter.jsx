import "react";
import { Emoji } from "../contexts/changeEmoji";
import { useContext } from "react";
import { State_of_List } from "../contexts/State_of_List";
const Filter = () => {
  const { emoji, setEmoji } = useContext(Emoji);
  const { filterButton, setFilterButton } = useContext(State_of_List);
  return (
    <div className="  bg-transparent h-fit w-fit md:text-xl drop-shadow-lg text-[var(--text)] font-bold rounded-lg flex justify-between hover:drop-shadow transition">
      <button
        value="all"
        onClick={(e) => setFilterButton(e.target.value)}
        className={
          filterButton == "all"
            ? "bg-[var(--gray2)] cursor-pointer  transition pl-2 sm:pl-5 pr-2 sm:pr-7 py-1.5 sm:py-2.5 border-2 rounded-lg"
            : " cursor-pointer transition  pl-2 sm:pl-5 pr-2 sm:pr-7 py-1.5 sm:py-2.5 border-2 rounded-lg"
        }
      >
        All
      </button>
      <button
        value="yas"
        onClick={(e) => setFilterButton(e.target.value)}
        className={
          filterButton == "yas"
            ? "bg-[var(--gray2)] cursor-pointer transition  pl-2 sm:pl-5 pr-2 sm:pr-5 py-1.5 sm:py-2.5 border-2 mx-0.5 rounded-lg"
            : " cursor-pointer transition  pl-2 sm:pl-5 pr-2 sm:pr-5 py-1.5 sm:py-2.5 border-2 mx-0.5 rounded-lg"
        }
      >
        {emoji.yas}
      </button>
      <button
        value="non"
        onClick={(e) => setFilterButton(e.target.value)}
        className={
          filterButton == "non"
            ? "bg-[var(--gray2)] cursor-pointer transition pl-2 sm:pl-5 pr-2 sm:pr-5 py-1.5 sm:py-2.5  border-2 rounded-lg"
            : " cursor-pointer transition pl-2 sm:pl-5 pr-2 sm:pr-5 py-1.5 sm:py-2.5  border-2 rounded-lg"
        }
      >
        {emoji.no}
      </button>
    </div>
  );
};

export default Filter;
