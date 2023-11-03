"use client";

import React from "react";

import { poppins, anonymous_Pro } from "@/fonts";
import { EyeClosedIcon } from ".";

/**
 * You have an undone input form
 */

type Props = {
  type: "text" | "tel" | "email" | "password" | "textarea" | "select";
  placeholder: string;
  label: string;
  name: string;
  //   onChange: (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => void;
  options?: Array<string>;
};

export default function FormInput({
  type,
  placeholder,
  label,
  name,
  options,
}: Props) {
  let inputClasses = [
    "placeholder:text-mid-grey",
    `${anonymous_Pro.className}`,
    "text-base",
    "font-normal",
    "border",
    "border-mid-grey",
    "bg-primary-white",
    "py-[0.375rem]",
    "px-[0.75rem]",
    "placeholder:capitalize",
    "focus:border-dark-grey",
    "outline-none",
  ];

  const renderInput = () => {
    if (type === "textarea") {
      inputClasses = [
        ...inputClasses,
        "outline-none",
        "min-h-[9.9375rem]",
        "resize-none",
        "overflow-hidden",
      ];
      return (
        <textarea
          className={inputClasses.join(" ")}
          placeholder={placeholder}
          name={name}
          id={name}
          aria-label={placeholder}
          aria-describedby={`error-${name}`}
          aria-labelledby={`label-${name}`}
          aria-placeholder={placeholder}
        />
      );
    }

    if (type === "password") {
      inputClasses = [...inputClasses, "w-full", "h-[1.875rem]"];
      return (
        <div className="relative">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={name}
            className={inputClasses.join(" ")}
            aria-label={placeholder}
            aria-describedby={`error-${name}`}
            aria-labelledby={`label-${name}`}
            aria-placeholder={placeholder}
          />
          <button className="absolute top-1/2 transform -translate-y-1/2 right-3">
            <EyeClosedIcon className="w-4 h-4 cursor-pointer" />
          </button>
        </div>
      );
    }

    if (type === "select") {
      if (!options || !options.length)
        throw new Error("Select Options not populated");

      inputClasses = [...inputClasses, "w-full", "custom-select"];

      return (
        <div className="w-full">
          <select
            id={name}
            name={name}
            autoComplete={name}
            className={inputClasses.join(" ")}
          >
            {options.map((option, index) => (
              // Yeah Yeah, I know this is supposed to be bad, but the options count is low so all is fine.
              <option key={index} className=" bg-dark-grey min-h-[1.875rem]">
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    }

    return (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        className={inputClasses.join(" ")}
        aria-label={placeholder}
        aria-describedby={`error-${name}`}
        aria-labelledby={`label-${name}`}
        aria-placeholder={placeholder}
      />
    );
  };

  return (
    <div className={`${poppins.className} flex flex-col mb-5 w-[26rem]`}>
      <label
        className="text-base text-primary-black font-bold mb-[0.3rem] capitalize"
        htmlFor={label}
      >
        {label}
      </label>
      {renderInput()}
    </div>
  );
}
