import React, { memo } from "react";

const ToggleButton = memo((props) => {
  // destructuring props
  const {
    label = "Toggle",
    labelClass = "",
    value,
    id = "toggle",
    name = "toggle",
    size = "large",
    buttonType = "primary",
    ...attributes
  } = props;

  // toggle input className
  let toggleButtonClass =
    "relative bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F3F8FF] rounded-full peer peer-checked:after:translate-x-full  peer-checked:after:border-white after:content-[''] after:absolute  after:bg-white after:border-gray-300 after:border after:rounded-full  after:transition-all";
  let checkedBackground;
  let sizeClass;

  // switch case to define button size
  switch (size) {
    case "small":
      sizeClass =
        "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4";
      break;
    case "medium":
      sizeClass =
        "w-9 md:w-11 h-5 md:h-6 after:top-[2px] after:start-[2px] after:h-4 md:after:h-5 after:w-4 md:after:w-5";
      break;
    case "large":
      sizeClass =
        "w-9 h-5 after:top-[4px] after:start-[4px] after:h-6 after:w-6";
    default:
      sizeClass =
        "w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5";
  }

  // switch case to define button type
  switch (buttonType) {
    case "primary":
      checkedBackground = "peer-checked:bg-blue-600";
      break;
    case "secondary":
      checkedBackground = "peer-checked:bg-gray-600";
      break;
    case "success":
      checkedBackground = "peer-checked:bg-green-600";
      break;
    case "danger":
      checkedBackground = "peer-checked:bg-red-600";
      break;
    case "warning":
      checkedBackground = "peer-checked:bg-yellow-600";
      break;
    case "info":
      checkedBackground = "peer-checked:bg-sky-600";
      break;
    case "light":
      checkedBackground = "peer-checked:bg-white";
      break;
    case "dark":
      checkedBackground = "peer-checked:bg-black";
      break;
    default:
      checkedBackground = "peer-checked:bg-blue-600";
  }
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        className="sr-only peer"
        size={size}
        {...attributes}
      />
      <div
        className={`${toggleButtonClass} ${checkedBackground} ${sizeClass}`}
      ></div>

      {/* toggle button label */}
      {label && (
        <span
          className={`ms-3 text-sm font-medium text-gray-900 ${labelClass}`}
        >
          {label}
        </span>
      )}
    </label>
  );
});

export default ToggleButton;
