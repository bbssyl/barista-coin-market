import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEnvelope,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  return (
    <div className="flex w-full py-4 items-center justify-between border-b border-blue-400/40 mb-3">
      <div>
        <label className="relative block">
          <span className="absolute inset-y-0 right-1 flex items-center pr-2 m-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4" />
          </span>
          <input
            type="search"
            className="outline-none px-4 py-2 bg-indigo-950 rounded-full"
          />
        </label>
      </div>
      <div className="flex gap-8">
        <div className="relative">
          <span className="absolute bg-blue-500 rounded-full px-2 text-sm -top-2 -left-2">
            1
          </span>
          <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
        </div>
        <div className="relative">
          <span className="absolute bg-blue-500 rounded-full px-2 text-sm -top-2 -left-2">
            8
          </span>
          <FontAwesomeIcon icon={faBell} className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
