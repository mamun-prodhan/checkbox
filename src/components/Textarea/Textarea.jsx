import React, { memo } from "react";

const Textarea = memo((props) => {
  // destructuring props
  const {
    value,
    id = "textarea",
    name = "textarea",
    placeholder = "Enter Your Message",
    errorMessage = "",
    label = "Write your message...",
    className = "",
    parentClass = "",
    labelClass = "",
    rows = 10,
    cols = 30,
    ...attributes
  } = props;

  // className for textarea
  let textareaClass =
    "block w-full px-3 py-2.5 bg-white disabled:bg-[#F9FAFB] rounded-lg border shadow-sm placeholder:text-[#777777] focus:outline-none text-sm lg:text-base text-[#2D384B] font-normal placeholder:font-normal placeholder:text-sm";

  return (
    <div className={`relative ${parentClass}`}>
      {/* textarea label */}
      {label && (
        <label
          className={`block mb-2 text-sm lg:text-base font-medium text-[#2D384B] ${labelClass}`}
        >
          {label}
        </label>
      )}

      <textarea
        value={value}
        name={name}
        id={id}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        {...attributes}
        className={`${textareaClass} ${
          errorMessage
            ? " border-[#FDA29B] focus:border-[#FDA29B] focus:ring-4 focus:ring-[#FEE4E2] "
            : "border-[#E1E6EF] focus:border-[#B9CCEB] ring-[#E1E6EF] focus:ring-4 focus:ring-[#E4EEFF]"
        }  ${className}`}
      />

      {/* textarea error message */}
      {errorMessage && (
        <p className="mt-1 md:mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
});

export default Textarea;
