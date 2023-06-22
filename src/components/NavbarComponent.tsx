import Link from "next/link";
import {
  faBitcoinSign,
  faStore,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarComponent = () => {
  const renderMenuItemContent = [
    {
      id: 1,
      title: "Buy/Sell",
      icon: faBagShopping,
    },
    {
      id: 2,
      title: "Market",
      icon: faStore,
    },
  ];
  return (
    <nav className="p-5 flex items-center gap-2 text-indigo-50 fixed w-full z-30 bg-gradient-to-tr from-indigo-950 to-indigo-900/50">
      <div>
        <Link
          href="/"
          className="font-bold uppercase text-lg flex items-center"
        >
          <FontAwesomeIcon icon={faBitcoinSign} className="w-5 rotate-12" />
          arista Coin
        </Link>
      </div>
      <div className="flex flex-grow min-[280px]:justify-end md:justify-between md:pl-9">
        <div className="min-[280px]:hidden md:flex items-center gap-3">
          {renderMenuItemContent.map((item) => {
            return (
              <Link href="#" key={item.id} className="flex gap-1 items-center">
                <FontAwesomeIcon icon={item.icon} className="w-3" />
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-1">
          <Link
            href="/login"
            className="px-4 py-1 uppercase whitespace-nowrap rounded-md bg-gradient-to-tr from-indigo-900 to-indigo-800 text-indigo-50 hover:from-indigo-800 hover:to-blue-900 font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
