"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import NotificationComponent from "@/components/utils/NotificationComponent";
import { useEffect, useRef, useState } from "react";
const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const noticeRef = useRef();
  useEffect(() => {
    const handleClose = (event) => {
      if (noticeRef.current && !noticeRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClose);

    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex py-4 items-center justify-between border-b border-blue-400/40 mb-3">
      <label className="relative block">
        <span className="absolute inset-y-0 right-1 flex items-center pr-2 m-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4" />
        </span>
        <input
          type="search"
          className="outline-none px-4 py-2 bg-indigo-950 rounded-full "
        />
      </label>
      <div>
        <div className="relative">
          <div className="cursor-pointer" onClick={handleOpen}>
            <span className="absolute bg-blue-500 rounded-full px-2 text-sm -top-2 -left-2">
              3
            </span>
            <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
          </div>
          <NotificationComponent open={open} noticeRef={noticeRef} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
