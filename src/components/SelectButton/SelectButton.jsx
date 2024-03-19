import React, { memo, useState } from "react";

const SelectButton = memo((props) => {
  // destructuring props
  const {
    datas,
    label = "Select your country",
    labelClass = "",
    buttonClass = "",
    selectClass = "",
    selectItemClass = "",
    dataIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
    selectedIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="check">
        <rect width="256" height="256" fill="none"></rect>
        <polyline
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
          points="216 72.005 104 184 48 128.005"
        ></polyline>
      </svg>
    ),
    selected,
    setSelected,
    ...attributes
  } = props;

  // state toggle drop down
  const [open, setOpen] = useState(false);

  // for toggle dropdown
  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleSelectOption = (data) => {
    setSelected(data?.name);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleDropdown();
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className={` relative`}>
      {label && (
        <label
          className={`block mb-2 text-sm lg:text-base font-medium text-[#2D384B] ${labelClass}`}
        >
          {label}
        </label>
      )}
      <div
        className={`w-full p-2 text-base flex items-center justify-between  border border-[#E1E6EF] focus:border-[#B9CCEB] ring-[#E1E6EF] focus:ring-4 focus:ring-[#E4EEFF] outline-none ${
          open ? "rounded-t-md" : "rounded-md"
        } ${!selected && "text-[#777777]"} ${buttonClass}`}
        tabIndex={0}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selected ? (
          <p className="flex flex-row items-center gap-2">
            <span className="w-6 h-6">{dataIcon}</span>
            <span>
              {selected?.length > 25
                ? selected?.substring(0, 25) + "..."
                : selected}
            </span>
          </p>
        ) : (
          <p className={`flex items-center flex-row gap-2`}>
            <span className="h-6 w-6">{dataIcon}</span>
            <span>Select Option</span>
          </p>
        )}
        <span className={`w-6 h-6 ${open && "rotate-180"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <ul
        role="listbox"
        aria-labelledby="options-list"
        className={`absolute w-full border border-[#E1E6EF]  rounded-b-md z-20 max-h-60 overflow-y-auto bg-white ${
          open ? "block" : "hidden"
        } ${selectClass}`}
      >
        {datas?.map((data) => (
          <li
            className={`p-2 flex flex-row items-center justify-between gap-2 text-sm hover:bg-[#F5F9FE] hover:text-black ${
              data?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-[#F5F9FE] text-[#2D384B]"
            } ${selectItemClass}`}
            key={data?.name}
            role="option"
            aria-selected={data?.name === selected}
            onClick={() => handleSelectOption(data)}
            {...attributes}
          >
            <p className="flex flex-row items-center gap-2">
              <span className="h-6 w-6">{dataIcon}</span>
              <span>{data?.name}</span>
            </p>
            {data?.name?.toLowerCase() === selected?.toLowerCase() && (
              <span className="w-6 h-6 text-[#216DF0]">{selectedIcon}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default SelectButton;
