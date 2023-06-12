import clsx from "clsx";

const Button = (props) => {
  return (
    <button
      {...props}
      className={clsx(
        "py-2 px-4 text-white rounded-md bg-gradient-to-r uppercase font-semibold text-sm",
        {
          "from-blue-400 to-blue-600 hover:from-blue-600 hover:to-indigo-600":
            props.primary,
          "from-slate-400 to-slate-600 hover:from-slate-600 hover:to-gray-600":
            props.secondary,
        }
      )}
    >
      {props.label}
    </button>
  );
};

export default Button;
