import { memo } from "react";

const Checkbox = memo((props) => {
  // destructuring props
  const {
    label = "Accept the terms",
    className = "",
    parentClass = "",
    labelClass = "",
    value,
    id = "checkbox",
    name = "checkbox",
    required = true,
    size = "large",
    rounded = "rounded",
    buttonType = "primary",
    checkboxIcon = (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </>
    ),
    ...attributes
  } = props;

  let sizeClass = ""; //checkbox size
  let color = ""; //checkbox color
  let iconColor = ""; //checkbox icon color
  let checkedBackground = ""; //background color for rounded checkbox

  // switch case to define button size
  switch (size) {
    case "small":
      sizeClass = "w-4 h-4";
      break;
    case "medium":
      sizeClass = "w-4 md:w-5 h-4 md:h-5";
      break;
    case "large":
      sizeClass = "w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6";
      break;
    default:
      sizeClass = "w-4 h-4";
  }

  // switch case to define button type
  switch (buttonType) {
    case "primary":
      color = "border-[#E1E6EF] focus:ring-[#E8F1FF] focus:border-[#216DF0]";
      iconColor = "peer-checked:text-[#216DF0]";
      checkedBackground = "checked:bg-[#216DF0]"; //background color for rounded checkbox
      break;
    case "secondary":
      color = "border-gray-200 focus:ring-gray-200 focus:border-gray-400";
      iconColor = "peer-checked:text-gray-600";
      checkedBackground = "checked:bg-gray-600"; //background color for rounded checkbox
      break;
    case "success":
      color = "border-green-200  focus:ring-green-200 focus:border-green-400";
      iconColor = "peer-checked:text-green-600";
      checkedBackground = "checked:bg-green-600"; //background color for rounded checkbox
      break;
    case "danger":
      color = "border-red-200 focus:ring-red-200 focus:border-red-400";
      iconColor = "peer-checked:text-red-600";
      checkedBackground = "checked:bg-red-600"; //background color for rounded checkbox
      break;
    case "warning":
      color = "border-yellow-200 focus:ring-yellow-200 focus:border-yellow-400";
      iconColor = "peer-checked:text-yellow-600";
      checkedBackground = "checked:bg-yellow-600"; //background color for rounded checkbox
      break;
    case "info":
      color = "border-sky-200 focus:ring-sky-200 focus:border-sky-400";
      iconColor = "peer-checked:text-sky-600";
      checkedBackground = "checked:bg-sky-600"; //background color for rounded checkbox
      break;
    case "dark":
      color =
        "border-black checked:bg-white focus:ring-black focus:border-black";
      iconColor = "peer-checked:text-black";
      checkedBackground = "checked:bg-black"; //background color for rounded checkbox
      break;
    default:
      color =
        "border-[#E1E6EF] checked:bg-white focus:ring-[#E8F1FF] focus:border-[#216DF0]";
      iconColor = "peer-checked:text-[#216DF0]";
      checkedBackground = "checked:bg-[#216DF0]"; //background color for rounded checkbox
  }

  return (
    <div className={`flex items-center gap-2 ${parentClass}`}>
      <input
        className={`relative peer shrink-0 appearance-none border border-[#E1E6EF] disabled:border-[#EAECF0] rounded bg-white disabled:bg-[#F2F4F7] mt-0  focus:outline-none focus:ring-offset-0 focus:ring-4 focus:ring-[#E8F1FF] focus:border-[#216DF0] ${sizeClass} ${
          rounded && `rounded-[50%] p-0.5 ${checkedBackground}`
        } ${color} ${className}`}
        type="checkbox"
        id={id}
        value={value}
        name={name}
        required={required}
        size={size}
        {...attributes}
      />
      {label && (
        <label
          htmlFor={id}
          className={`text-sm md:text-base text-[#2D384B] ${labelClass}`}
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <span
        className={`absolute mt-0 p-0.5 hidden peer-checked:block pointer-events-none ${
          rounded ? "peer-checked:text-white" : iconColor
        } disabled:peer-checked:text-[#EAECF0] ${sizeClass} `}
      >
        {checkboxIcon}
      </span>
    </div>
  );
});

export default Checkbox;
