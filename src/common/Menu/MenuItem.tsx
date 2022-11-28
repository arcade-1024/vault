import React, { ReactNode } from "react";

interface PropTypes {
  primaryText: ReactNode;
  secondaryText?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  secondaryTextClassName?: string;
  className?: string;
  multiMenu?: ReactNode;
  dataTestId?: string;
}

export default function MenuItem(props: PropTypes) {
  const {
    primaryText,
    secondaryText,
    icon,
    secondaryTextClassName,
    className,
    onClick,
    multiMenu,
    dataTestId,
  } = props;
  return (
    <div className="relative">
      <div
        data-testid={dataTestId}
        className={`hover:bg-gray-200 flex flex-row px-4 py-3 text-gray-800 transition-all duration-500 ease-in-out rounded cursor-pointer dark:bg-darkGray-500 dark:hover:bg-darkGray-100 ${className}`}
        onClick={onClick}
      >
        {icon && (
          <span className=" text-md mr-2 text-gray-600 dark:text-white">
            {icon}
          </span>
        )}
        <div className="flex flex-col">
          <div className="font-medium text-gray-700 dark:text-white text-sm mt-0.5">
            {primaryText}
          </div>
          {secondaryText && (
            <div
              className={
                secondaryTextClassName
                  ? secondaryTextClassName
                  : "mt-1 text-sm font-semibold dark:text-gray-200"
              }
            >
              {secondaryText}
            </div>
          )}
        </div>
      </div>
      {multiMenu}
    </div>
  );
}
