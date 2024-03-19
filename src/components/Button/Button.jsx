import React, { memo } from "react";
/**
 * JSX button component independent and reusable.
 * The button props are children, className, iconPosition and any valid attribute we want to use.
 *
 * @return {JSX.Element} - Button component.
 *
 * @since 1.0.0
 */

const Button = memo((props) => {
  // destructuring props
  const {
    children,
    className,
    iconPosition = "right",
    size = "small",
    buttonType = "info",
    ...attributes
  } = props;

  // classNames
  let buttonClass =
    "flex items-center justify-center gap-1 md:gap-2 text-base bg-blue-400 disabled:bg-gray-300 hover:bg-blue-600 duration-200 rounded-md text-white font-semibold focus:border-2 focus:border-blue-200 outline-none";

  let sizeClass = "";
  let color = "";

  //switch case to define button size
  switch (size) {
    case "small":
      sizeClass = "px-3 py-2";
      break;
    case "medium":
      sizeClass = "px-3 md:px-4 py-2";
      break;
    case "large":
      sizeClass = "px-3 md:px-4 lg:px-6 py-2 lg:py-3";
      break;
    default:
      sizeClass = "px-3 md:px-4 py-2";
  }

  //switch case to define button type
  switch (buttonType) {
    case "primary":
      color = "bg-blue-400 hover:bg-blue-600 focus:border-blue-200";
      break;
    case "secondary":
      color = "bg-gray-400 hover:bg-gray-600 focus:border-gray-200";
      break;
    case "success":
      color = "bg-green-400 hover:bg-green-600 focus:border-green-200";
      break;
    case "danger":
      color = "bg-green-400 hover:bg-green-600 focus:border-green-200";
      break;
    case "warning":
      color = "bg-yellow-400 hover:bg-yellow-600 focus:border-yellow-200";
      break;
    case "info":
      color = "bg-sky-400 hover:bg-sky-600 focus:border-sky-200";
      break;
    default:
      color = "bg-blue-400 hover:bg-blue-600 focus:border-blue-200";
  }

  return (
    <button
      className={`${buttonClass} ${iconPosition === "right" && "flex-row"} ${
        iconPosition === "left" && "flex-row-reverse"
      } ${className} ${sizeClass} ${color}`}
      {...attributes}
    >
      {children}
    </button>
  );
});

export default Button;
