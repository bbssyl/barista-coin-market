import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = (props) => {
  return (
    <div>
      <label className="relative block">
        {props.icon && (
          <span className="absolute inset-y-0 left-1 flex items-center pl-2 border-2 border-blue-500 rounded-full p-2 m-2">
            <FontAwesomeIcon icon={props.icon} className="w-3 text-white" />
          </span>
        )}
        <input
          {...props}
          className={`py-3 pr-3 rounded-md outline-none text-white focus:border-b focus:border-blue-500 ${
            props.icon ? "pl-14" : "pl-4"
          } ${props.fullfilled === "true" ? "w-full" : null}`}
          style={{ background: "rgba(46, 53, 88, 1)" }}
        />
      </label>
    </div>
  );
};

export default Input;
