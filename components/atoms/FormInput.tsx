"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Control,
  UseFormRegister,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";

import { EyeClosedIcon, SelectInput } from "./";

import { poppins, anonymous_Pro, roboto } from "@/fonts";

import SliderInput from "./SliderInput";

type Props<T extends FieldValues> = {
  /** Form type */
  type: FormType;

  /** Input Placeholder */
  placeholder: string;

  /** Input Label */
  label?: string;

  /** Input name */
  name: Path<T>;

  /** Select options */
  options?: Array<Option>;

  /** hide input label element */
  hideLabel?: boolean;

  /** React hook form Register handler */
  register: UseFormRegister<T>;

  /** React hook form control instance */
  control: Control<T>;

  /** React hook form error instance */
  errors?: FieldErrors<T>;
};

export default function FormInput<T extends FieldValues>({
  type,
  placeholder,
  label,
  name,
  options,
  hideLabel,
  register,
  control,
  errors,
}: Props<T>) {
  const [showDropDown, setShowDropDown] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  /** Select Dropdown Exit Controller */
  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    if (type === "select") {
      window.addEventListener("click", handleClickOutside);
      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }
  }, [type]);

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

  /** Render form Input based on it's type */
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
            {...register(name)}
          />
          <button className="absolute top-1/2 transform -translate-y-1/2 right-3">
            <EyeClosedIcon className="w-4 h-4 cursor-pointer" />
          </button>
        </div>
      );
    }

    if (type === "select") {
      if (!options || !options.length) throw new Error("Nominee not populated");

      inputClasses = [
        ...inputClasses,
        "w-full",
        "custom-select",
        "max-w-[25.6875rem]",
      ];

      return (
        <div className="w-full">
          <SelectInput<T>
            name={name}
            control={control}
            placeholder={placeholder}
            options={options}
          />
        </div>
      );
    }

    if (type === "range") {
      return (
        <SliderInput<T>
          name={name}
          control={control}
        />
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
      {errors && errors[name]?.message && (
        <small
          className={`${poppins.className} mt-[0.25rem] text-[0.875rem] text-error`}
        >
          {/* {errors[name]?.message} */}
        </small>
      )}
    </div>
  );
}
