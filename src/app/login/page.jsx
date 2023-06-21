import Button from "@/components/utils/Button";
import Input from "@/components/utils/Input";
import React from "react";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div className="h-screen flex min-[280px]:justify-center md:justify-center items-center gap-10 relative">
      <div className="h-3/5 z-10">
        <div className="flex flex-col justify-center items-center shadow-2xl filter-none min-[280px]:p-4 md:p-10 rounded-md relative bg-indigo-950 bg-opacity-90 h-full">
          <div className="absolute min-[280px]:right-12 top-4 -z-10 sm:-right-12">
            <svg
              width="67"
              height="67"
              viewBox="0 0 85 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="38.1519"
                y="7.02563"
                width="50"
                height="50"
                transform="rotate(38.5008 38.1519 7.02563)"
                stroke="url(#linear_3)"
                strokeWidth="10"
              />
              <defs>
                <linearGradient
                  id="linear_3"
                  x1="67.3516"
                  y1="1.59655e-06"
                  x2="120.923"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0D8DFF" />
                  <stop offset="1" stopColor="#0D8DFF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute top-10 -left-5">
            <svg
              width="67"
              height="67"
              viewBox="0 0 117 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter_linear_1)">
                <path
                  d="M25.3342 17.0341L90.94 22.3142L53.5644 76.4905L25.3342 17.0341Z"
                  stroke="url(#linear_2)"
                  strokeWidth="12"
                />
              </g>
              <defs>
                <filter
                  id="filter_linear_1"
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
                  id="linear_2"
                  x1="101.78"
                  y1="17.1673"
                  x2="49.7414"
                  y2="140.714"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="rgb(237, 100, 128, 1)" />
                  <stop offset="1" stopColor="rgba(250, 214, 121, 1)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 h-full">
            <h2 className="text-white text-xl mb-10 font-semibold">
              Welcome to BaristaCoin!
            </h2>
            <Input type="email" placeholder="E-mail" icon={faUser} />
            <Input type="password" placeholder="Password" icon={faLock} />
            <div className="flex justify-evenly w-full mt-5">
              <Button href="#" label="Sign Up" secondary />
              <Button href="/dashboard" label="Sign In" primary />
            </div>
          </div>
          <Link href="#" className="underline text-sm text-blue-400">
            Forgot your password?
          </Link>
        </div>
      </div>
      <div className="min-[280px]:hidden w-1/3 md:flex flex-col justify-center items-center gap-5">
        <h2 className="text-blue-400 text-7xl font-semibold">BARISTA</h2>
        <div className="border-b border-blue-500 w-52 border-2"></div>
        <p className="text-white">Your currency dashboard</p>
      </div>

      <div className="absolute bottom-44 right-80">
        <svg
          width="117"
          height="109"
          viewBox="0 0 117 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter_linear_1)">
            <path
              d="M25.3342 17.0341L90.94 22.3142L53.5644 76.4905L25.3342 17.0341Z"
              stroke="url(#linear_1)"
              strokeWidth="12"
            />
          </g>
          <defs>
            <filter
              id="filter_linear_1"
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
              id="linear_1"
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
      <div className="absolute bottom-0 right-0 -z-30">
        <svg
          width="1082"
          height="766"
          viewBox="0 0 1082 766"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M863 152.5C939.531 28.2943 1044.83 116.167 1082 0V766H0C80 602.589 287.358 492.5 414.5 492.5C618 492.5 708.551 615.524 823.5 472C912 361.5 802 251.5 863 152.5Z"
            fill="url(#paint0_linear_47_7)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_47_7"
              x1="80.5"
              y1="744"
              x2="1108.5"
              y2="354.999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#160A41" />
              <stop offset="1" stopColor="#018FFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 -z-30">
        <div className="">
          <svg
            width="1339"
            height="557"
            viewBox="0 0 1339 557"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M970 311C1177.78 311 1301.33 116.167 1338.5 0V557H0C71 509.5 104.729 544.529 205 509.5C319.5 469.5 450 582.5 609.5 491C741.337 415.369 686 311 970 311Z"
              fill="url(#paint0_linear_47_44)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_47_44"
                x1="366.5"
                y1="574"
                x2="1394.5"
                y2="185"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#160A41" />
                <stop offset="1" stopColor="#018FFF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
