"use client";

import { anonymous_Pro } from "@/fonts";
import React, { useState, useRef, useEffect } from "react";

export default function ReactSelect() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleOptionClick = (option: { value: string; label: string }) => {
    setSelectedValue(option.label); // Set the selected value when an option is clicked
    setShowDropDown(false); // Close the dropdown
  };

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (
  //     selectRef.current &&
  //     !selectRef.current.contains(event.target as Node)
  //   ) {
  //     setShowDropDown(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("click", handleClickOutside);
  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return (
    <div className="w-1/2 h-60 bg-primary-white p-4 flex items-center justify-center">
      <div
        ref={selectRef}
        className="h-auto  w-full max-w-[25.6875rem] bg-primary-white relative"
      >
        <input
          readOnly
          placeholder="Select Options"
          defaultValue={options[0].label}
          type="text"
          onClick={() => setShowDropDown(!showDropDown)}
          // className={`placeholder:text-mid-grey ${anonymous_Pro.className} text-base font-normal border border-mid-grey bg-primary-white py-[0.375rem] px-[0.75rem] placeholder:capitalize focus:border-dark-grey outline-none w-full custom-select`}
          value={selectedValue}
        />
        {showDropDown && (
          <div className="w-full flex flex-col items-center justify-center  gap-[0.06rem] absolute bg-primary-white">
            {options.map((option, ind) => (
              <button
                type="button"
                key={ind}
                onClick={() => handleOptionClick(option)}
                className={`${anonymous_Pro.className} text-normal text-base w-full h-[2.625rem] bg-light-grey text-left py-[0.375rem] px-[0.75rem]`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
