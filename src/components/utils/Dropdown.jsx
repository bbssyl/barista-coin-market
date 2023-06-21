"use client";
import { useEffect, useRef, useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Dropdown = ({ title, data = [] }) => {
  const [open, setOpen] = useState(false);
  const [buttonTitle, setButtonTitle] = useState(title);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleChange = (item) => {
    setOpen(false);
    setButtonTitle(item);
  };
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="p-2 hover:bg-indigo-950 rounded-md flex gap-2 items-center"
        onClick={handleOpen}
      >
        {buttonTitle}
        <FontAwesomeIcon
          icon={!open ? faChevronDown : faChevronUp}
          className="w-3"
        />
      </button>
      <div
        className={`absolute top-10 left-0 rounded-md bg-white text-indigo-600 p-2 z-10 ${
          open === false ? "hidden" : "block"
        }`}
      >
        {data.map((item) => {
          return (
            <button
              key={item}
              className="py-1 px-2 hover:bg-indigo-700 hover:text-white transition-all ease-in-out duration-200 rounded-md w-full text-left"
              onClick={() => handleChange(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
