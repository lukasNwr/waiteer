import React from "react";
import Image from "next/image";

const TopBar = () => {
  return (
    <>
      <div className="flex w-full h-[4.5rem] items-center justify-center">
        <div className="flex w-[78%] h-full items-center justify-between">
          <Image
            src="/waiteerlogopink.png"
            alt="logo image"
            height={25}
            width={110}
            layout="fixed"
          />
          <input
            className="px-6 py-1 h-9 outline-none rounded-full border-[1px] border-grey-600 border-grey-400 placeholder:text-grey-200"
            placeholder="Sog"
          ></input>
          <button className="flex items-center text-md font-bold text-waiteerPink gap-2 px-5 py-1 border-waiteerPink border-[3px] rounded-full">
            Log In{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="h-4"
            >
              <path
                fill="#f68a9a"
                d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBar;
