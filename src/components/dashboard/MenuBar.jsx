"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faClose,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { renderMenu } from "@/service/api";

const MenuBar = ({ open, handleOpen, menuRef }) => {
  const pathname = usePathname();

  return (
    <aside
      className={`py-4 w-72 shadow-2xl h-full bg-gradient-to-t from-indigo-950 to-indigo-950/95 xl:flex flex-col justify-between sticky top-0  ${
        open ? "min-[280px]:flex z-30 " : "min-[280px]:hidden"
      }`}
      ref={menuRef}
    >
      <div>
        <div className="flex justify-around items-center mb-10">
          <div>
            <h2 className="uppercase text-blue-400 text-center font-semibold text-2xl">
              Barista
            </h2>
            <div className="w-full border border-blue-400 mx-auto"></div>
          </div>
          <button onClick={() => handleOpen()} className="xl:hidden">
            <FontAwesomeIcon
              icon={faClose}
              className="w-5 h-5 rounded-full p-2 hover:bg-indigo-950/50"
            />
          </button>
        </div>
        {renderMenu.map((item) => {
          return (
            <div key={item.id}>
              <Link
                href={`/dashboard/${item.url}`}
                className={`whitespace-nowrap text-gray-400 flex item-center gap-3 m-4 px-2 transition-all ease-in-out duration-200 ${
                  pathname.endsWith(item.url) &&
                  `text-white rounded-md py-4 bg-gray-700/50 bg-opacity-50 border-b-2 border-blue-400 font-semibold`
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="w-5 my-1" />
                <span className="text-sm">{item.title}</span>
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <div className="w-10/12 border border-blue-400 mx-auto mb-5"></div>
        <div className="flex flex-col gap-2 px-4 text-gray-400">
          <Link
            href={"#"}
            className="whitespace-nowrap flex items-center gap-3 px-2 transition-all ease-in-out duration-200 hover:text-white"
          >
            <FontAwesomeIcon icon={faUser} className="w-5" />
            Barış Benli
          </Link>
          <Link
            href={"#"}
            className="whitespace-nowrap flex items-center gap-3 px-2 transition-all ease-in-out duration-200 hover:text-white"
          >
            <FontAwesomeIcon icon={faArrowRightToBracket} className="w-5" />
            Logout
          </Link>
        </div>
      </div>
      <div className="absolute bottom-72 min-[280px]:right-0 md:-right-10">
        <svg
          width="117"
          height="109"
          viewBox="0 0 117 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_47_46)">
            <path
              d="M25.3342 17.0341L90.94 22.3142L53.5644 76.4905L25.3342 17.0341Z"
              stroke="url(#paint0_linear_47_46)"
              strokeWidth="12"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_47_46"
              x="0.456543"
              y="0.219727"
              width="116.324"
              height="108.232"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5" />
              <feGaussianBlur stdDeviation="7.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.390606 0 0 0 0 0.69869 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_47_46"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_47_46"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_47_46"
              x1="101.78"
              y1="17.1673"
              x2="49.7414"
              y2="140.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1AFCFF" />
              <stop offset="0.325967" stopColor="#5F8FE4" />
              <stop offset="0.674033" stopColor="#6067D7" />
              <stop offset="1" stopColor="#745BE9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </aside>
  );
};

export default MenuBar;
