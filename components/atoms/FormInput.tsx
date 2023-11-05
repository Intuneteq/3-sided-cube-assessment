"use client";

import React from "react";
import { useForm } from "react-hook-form"

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
  options?: Array<string>;

  /** hide input label element */
  hideLabel?: boolean
};

export default function FormInput({
  type,
  placeholder,
  label,
  name,
  options,
  hideLabel
}: Props) {
   const { register } = useForm()

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
        "md:h-[9.9375rem]",
        "resize-none",
        "overflow-hidden",
        "h-[22rem]"
      ];
      return (
        <textarea
          className={inputClasses.join(" ")}
          placeholder={placeholder}
          id={name}
          aria-label={placeholder}
          aria-describedby={`error-${name}`}
          aria-labelledby={`label-${name}`}
          aria-placeholder={placeholder}
          {...register(name)}
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
            id={name}
            className={inputClasses.join(" ")}
            aria-label={placeholder}
            aria-describedby={`error-${name}`}
            aria-labelledby={`label-${name}`}
            aria-placeholder={placeholder}
            {...register(name, { required: `${name} is required`})}
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
            autoComplete={name}
            className={inputClasses.join(" ")}
            {...register(name)}
          >
            {options.map((option, index) => (
              // Yeah Yeah, I know this is supposed to be bad, but the options count is low so all is fine.
              <option value={option} key={index} className=" bg-dark-grey min-h-[1.875rem]">
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
        id={name}
        className={inputClasses.join(" ")}
        aria-label={placeholder}
        aria-describedby={`error-${name}`}
        aria-labelledby={`label-${name}`}
        aria-placeholder={placeholder}
        {...register(name)}
      />
    );
  };

  return (
    <div className={`${poppins.className} flex flex-col mb-5 w-full`}>
      <label
        className={`text-base text-primary-black font-bold mb-[0.3rem] capitalize ${hideLabel && 'hidden'}`}
        htmlFor={label}
      >
        {label}
      </label>
      {renderInput()}
      
    </div>
  );
}
