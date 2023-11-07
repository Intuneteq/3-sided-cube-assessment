"use client";

import React from "react";
import { UseFormRegister } from "react-hook-form";

import { EyeClosedIcon, Fair, NotSure, ReactionSmiley, Unfair, VeryFair, VeryUnfair } from "./";

import { poppins, anonymous_Pro, roboto } from "@/fonts";
import { MobileRating } from "../molecules";

type Props = {
  type: FormType;

  placeholder: string;

  label: string;

  name: Inputs;

  options?: Array<string>;

  /** hide input label element */
  hideLabel?: boolean;

  register: UseFormRegister<FormValues>;
};

export default function FormInput({
  type,
  placeholder,
  label,
  name,
  options,
  hideLabel,
  register,
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
        "md:h-[9.9375rem]",
        "resize-none",
        "overflow-hidden",
        "h-[22rem]",
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
            {...register(name, { required: `${name} is required` })}
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

      inputClasses = [
        ...inputClasses,
        "w-full",
        "custom-select",
        "max-w-[25.6875rem]",
      ];

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
              <option
                value={option}
                key={index}
                className=" bg-dark-grey min-h-[1.875rem]"
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    }

    if (type === "range") {
      return (
        <>
          <div className="w-full hidden md:block">
            <input
              type={type}
              min={1}
              max={5}
              // value={4}
              step={1}
              className="w-full"
            />

            <div className="flex mt-7 w-full justify-center items-center gap-[5.25rem] mb-[1.88rem]">
              <ReactionSmiley name="Very Unfair">
                <VeryUnfair className="w-[2.18763rem] h-[2.18763rem]" />
              </ReactionSmiley>
              <ReactionSmiley name="unfair">
                <Unfair className="w-[2.18763rem] h-[2.18763rem]" />
              </ReactionSmiley>
              <ReactionSmiley name="not sure">
                <NotSure className="w-[2.18763rem] h-[2.18763rem]" />
              </ReactionSmiley>
              <ReactionSmiley name="fair">
                <Fair className="w-[2.18763rem] h-[2.18763rem]" />
              </ReactionSmiley>
              <ReactionSmiley name="very fair">
                <VeryFair className="w-[2.18763rem] h-[2.18763rem]" />
              </ReactionSmiley>
            </div>
          </div>

          <div className="md:hidden flex flex-col items-center justify-center w-full gap-3">
            <MobileRating rating="very unfair">
              <VeryUnfair className="w-6 h-6" />
            </MobileRating>
            <MobileRating rating="unfair">
              <Unfair className="w-6 h-6" />
            </MobileRating>
            <MobileRating rating="not sure">
              <NotSure className="w-6 h-6" />
            </MobileRating>
            <MobileRating rating="fair">
              <Fair className="w-6 h-6" />
            </MobileRating>
            <MobileRating rating="very fair">
              <VeryFair className="w-6 h-6" />
            </MobileRating>
          </div>
        </>
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
        className={`${roboto.className} text-base font-bold mb-2 ${
          hideLabel && "hidden"
        }`}
        htmlFor={name}
      >
        <span className="text-secondary-pink">*</span> {label}
      </label>
      {renderInput()}
    </div>
  );
}
