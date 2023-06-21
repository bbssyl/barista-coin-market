"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEnvelope,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const SearchBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex py-4 items-center min-[280px]:justify-center sm:justify-between border-b border-blue-400/40 mb-3">
      <label className="relative block">
        <span className="absolute inset-y-0 right-1 flex items-center pr-2 m-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4" />
        </span>
        <input
          type="search"
          className="outline-none px-4 py-2 bg-indigo-950 rounded-full"
        />
      </label>
      <div className="min-[280px]:hidden sm:flex gap-8">
        <div className="relative cursor-pointer" onClick={handleOpen}>
          <span className="absolute bg-blue-500 rounded-full px-2 text-sm -top-2 -left-2">
            1
          </span>
          <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
        </div>
        <div className="relative">
          <span className="absolute bg-blue-500 rounded-full px-2 text-sm -top-2 -left-2">
            8
          </span>
          <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
