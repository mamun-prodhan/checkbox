import { memo } from "react";

const CheckBoxGroup = memo(() => {
  return (
    <div className="relative">
      <input type="radio" name="user" id="user1" className="hidden peer" />
      <label
        htmlFor="user1"
        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E1E6EF] peer-checked:border-[#5992F3]  peer-checked:bg-[#F1F6FF] peer-focus:border-[#B9CCEB] cursor-pointer transition"
      >
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
        <div>
          <h6 className="text-base text-black">
            Basic Plan
            <span className="text-sm text-[#838B99]  peer-checked:text-[#216DF0]">
              $10/month
            </span>
          </h6>
          <span className="text-sm text-[#838B99] peer-checked:text-[#216DF0]">
            Includes up to 10 users, 20GB indiviual data and access to all
            features.
          </span>
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
});

export default CheckBoxGroup;
