import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHomeAlt,
  faUserAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const MobileMenu = ({ handleOpen }) => {
  const router = useRouter();
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 rounded-full drop-shadow-2xl bg-gradient-to-b from-indigo-950 to-black/50 w-full min-[280px]:grid xl:hidden grid-cols-3 place-items-center">
      <button
        className="flex flex-col gap-1 justify-center items-center"
        onClick={() => handleOpen()}
      >
        <FontAwesomeIcon icon={faBars} />
        Menu
      </button>
      <button
        className="flex flex-col gap-1 justify-center items-center"
        onClick={() => {
          router.push("/dashboard/overview");
        }}
      >
        <FontAwesomeIcon icon={faHomeAlt} />
        <span>Home</span>
      </button>
      <button className="flex flex-col gap-1 justify-center items-center">
        <FontAwesomeIcon icon={faUserAlt} />
        <span>Account</span>
      </button>
    </div>
  );
};

export default MobileMenu;
