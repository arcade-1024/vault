import { ReactNode, useRef, useState, useEffect, useContext } from "react";
import useIsOverflowing from "../../../containers/site/hooks/useIsOverflowing/useIsOverflowing";
import useIsOverflowingMulti from "../../../containers/site/hooks/useIsOverflowing/useIsOverflowingMulti";

import { useWindowSize } from "react-use";
interface PropTypes {
  open: boolean;
  setOpen: (boolean) => void;
  children: ReactNode;
  buttonClassName?: string;
  menuStyles?: Object;
  disabled?: boolean | false;
}
const MultiDropdown = ({
  children,
  open,
  setOpen,
  buttonClassName,
  disabled,
  menuStyles,
}: PropTypes) => {
  const handleClick = () => setOpen(!open);
  const menuRef = useRef<HTMLDivElement>();
  const bgRef = useRef<HTMLDivElement>();

  const isOverflowing = useIsOverflowingMulti({
    elementRef: menuRef,
    clientRef: bgRef,
    open,
  });

  // useEffect(() => {
  //   utilityStore.changeMultiDropdownState({ multiDropdownState: open });
  //   utilityStore.setMultiDropdownRef({
  //     multiDropdownRef: menuRef,
  //     multiDropdownContainerRef: bgRef,
  //   });
  // }, [open, width]);

  // useEffect(() => {
  //   setOverflow(utilityStore.getMultiDropdownScreenOverflowValue[0]);
  // }, [utilityStore.getMultiDropdownScreenOverflowValue]);

  return (
    <>
      {/* <pre>{JSON.stringify(utilityStore.multiDropdownScreenOverflowValue)}</pre> */}
      {isOverflowing[0] && (
        <div
          className={`
          absolute flex flex-col
					z-30 mt-1 bg-white dark:bg-darkGray-500 shadow-2xl rounded-lg
					transform ${!open && "opacity-0"} ${open ? "scale-y-100" : "scale-y-0"}
          transition duration-200 ease-in-out`}
          ref={menuRef}
          style={{
            right: 0,
            left: "-10.25rem",
            top: "-0.2rem",
            transformOrigin: "top",
            width: "10rem",
            ...menuStyles,
          }}
        >
          {children}
        </div>
      )}

      {!isOverflowing[0] && (
        <div
          className={`
          absolute flex flex-col
					z-30 mt-1 bg-white dark:bg-darkGray-500 shadow-2xl rounded-lg
					transform ${!open && "opacity-0"} ${open ? "scale-y-100" : "scale-y-0"}
          transition duration-200 ease-in-out`}
          ref={menuRef}
          style={{
            right: 0,
            left: "12.25rem",
            top: "-0.2rem",
            transformOrigin: "top",
            width: "10rem",
            ...menuStyles,
          }}
        >
          {children}
        </div>
      )}
      <div
        ref={bgRef}
        className={`fixed z-20 inset-0  opacity-0 pointer-events-none`}
      />
    </>
  );
};

export default MultiDropdown;
