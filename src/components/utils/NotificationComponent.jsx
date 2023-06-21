import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const NotificationComponent = ({ open, noticeRef }) => {
  return (
    <div
      className={`relative z-10  ${open ? "visible" : "hidden"}`}
      ref={noticeRef}
    >
      <div className="absolute top-0 right-0 bg-indigo-950 p-4 w-[400px] shadow-md shadow-black rounded-md">
        <div className="border-b border-indigo-900">
          <div className="flex gap-1 items-center">
            <span className="font-semibold py-2">BTC News</span>
            <div className="text-xs text-gray-500">
              <FontAwesomeIcon icon={faClock} />
              <span>10 hours ago</span>
            </div>
          </div>
          <p className="my-2 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            distinctio.
          </p>
        </div>{" "}
        <div className="border-b border-indigo-900">
          <div className="flex gap-1 items-center">
            <span className="font-semibold py-2">BTC News</span>
            <div className="text-xs text-gray-500">
              <FontAwesomeIcon icon={faClock} />
              <span>10 hours ago</span>
            </div>
          </div>
          <p className="my-2 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            distinctio.
          </p>
        </div>{" "}
        <div className="border-b border-indigo-900">
          <div className="flex gap-1 items-center">
            <span className="font-semibold py-2">BTC News</span>
            <div className="text-xs text-gray-500">
              <FontAwesomeIcon icon={faClock} />
              <span>10 hours ago</span>
            </div>
          </div>
          <p className="my-2 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            distinctio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
