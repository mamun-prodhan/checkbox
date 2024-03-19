import React from "react";

const CheckBoxGroup2 = () => {
  return (
    <div className="relative">
      <input type="radio" name="user" id="user1" className="hidden peer" />
      <label
        htmlFor="user1"
        className="flex flex-col gap-2 rounded-xl bg-white border border-[#E1E6EF] peer-checked:border-[#5992F3]  peer-checked:bg-[#F1F6FF] peer-focus:border-[#B9CCEB] cursor-pointer transition"
      >
        <div className="flex items-center gap-2 p-4">
          <span className="text-[#216DF0] p-1 bg-[#DDEBFF] rounded-full border-4 border-[#F1F7FF]">
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
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </span>
          <h6 className="text-base text-[#2D384B]">Basic Plan</h6>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-2  items-start md:items-center bg-white justify-between p-4 border-t">
          <div>
            <span className="text-3xl text-[#2D384B] font-semibold">$10</span>
            <span className="text-sm text-[#838B99]"> per month</span>
            <p className="text-sm text-[#838B99]">
              Includes up to 10 users, 20GB indivitual data and access to all
              features.
            </p>
          </div>
          <p className="text-xs font-medium text-[#027A48] bg-[#ECFDF3] px-2 py-1 rounded-full">
            Limited time only
          </p>
        </div>
      </label>
      <div className="flex absolute top-4 right-4  w-5 h-5 my-auto rounded-full bg-[#216DF0] scale-0 peer-checked:scale-100 transition delay-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-4 text-white my-auto mx-auto"
          viewBox="0 0 16 16"
        >
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
        </svg>
      </div>
    </div>
  );
};

export default CheckBoxGroup2;
