import "react";

const Filter = ({ setFilterButton, filterButton }) => {
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
        ✔
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
        ❌
      </button>
    </div>
  );
};

export default Filter;
