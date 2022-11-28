import React, { ReactNode } from "react";

interface PropTypes {
  open: boolean;
  setOpen: (boolean) => void;
  name: ReactNode;
  avatar?: ReactNode;
  children: ReactNode;
  buttonClassName?: string;
  menuStyles?: Object;
  disabled?: boolean | false;
  dataTestID?: string;
}

export default function Menu(props: PropTypes) {
  const {
    open,
    setOpen,
    name,
    children,
    avatar,
    buttonClassName,
    menuStyles = {},
    disabled,
    dataTestID,
  } = props;
  const handleClick = () => setOpen(!open);
  return (
    <div className="relative inline-block">
      {avatar && <div onClick={handleClick}>{avatar}</div>}
      {!avatar && (
        <button
          type="button"
          data-testid={dataTestID}
          className={`${
            buttonClassName
              ? buttonClassName
              : "w-28 hover:shadow-none hover:bg-emerald-500 focus:outline-none relative py-2 font-semibold text-white transition-all duration-500 ease-in-out bg-emerald-400 rounded shadow-lg"
          }`}
          onClick={handleClick}
          disabled={disabled}
        >
          {name}
        </button>
      )}
      <div
        className={`
          absolute flex flex-col
					z-20 mt-1 bg-white dark:bg-darkGray-500 shadow-2xl rounded-lg
					transform  ${open ? "scale-y-100" : "scale-y-0"}
          transition-all duration-200 ease-in-out`}
        style={{
          right: 0,
          transformOrigin: "top",
          width: "14rem",
          ...menuStyles,
        }}
      >
        {children}
      </div>
      {open && (
        <div
          className={`fixed h-screen w-full z-10 inset-0 bg-gray-900 opacity-0 overflow-scroll max-h-full`}
          onClick={handleClick}
        >
          <div className="h-screen w-full bg-black"></div>
        </div>
      )}
    </div>
  );
}
