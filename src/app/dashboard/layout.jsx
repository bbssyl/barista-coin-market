"use client";
import MenuBar from "@/components/dashboard/MenuBar";
import SearchBar from "@/components/dashboard/SearchBar";
import MobileMenu from "@/components/dashboard/MobileMenu";
import { useEffect, useRef, useState } from "react";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    const handleClose = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
    <div className="flex gap-2 bg-gradient-to-r from-black/50 to-indigo-900/60 text-white h-screen overflow-auto relative">
      <MenuBar open={open} handleOpen={handleOpen} menuRef={menuRef} />
      <div className="flex flex-col w-full p-4 min-[280px]:absolute xl:static h-full scroll-container">
        <SearchBar />
        <div>{children}</div>
      </div>
      <MobileMenu handleOpen={handleOpen} />
    </div>
  );
};

export default DashboardLayout;
