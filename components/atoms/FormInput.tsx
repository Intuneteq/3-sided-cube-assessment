"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Control,
  UseFormRegister,
  Controller,
  FieldErrors,
} from "react-hook-form";

import {
  EyeClosedIcon,
  Fair,
  NotSure,
  ReactionSmiley,
  Unfair,
  VeryFair,
  VeryUnfair,
} from "./";
import { MobileRating } from "../molecules";

import { poppins, anonymous_Pro, roboto } from "@/fonts";
import { ProcessValues } from "@/lib/constants";

type Props = {
  /** Form type */
  type: FormType;

  /** Input Placeholder */
  placeholder: string;

  /** Input Label */
  label: string;

  /** Input name */
  name: Inputs;

  /** Select options */
  options?: Array<Option>;

  /** hide input label element */
  hideLabel?: boolean;

  /** React hook form Register handler */
  register: UseFormRegister<FormValues>;

  /** React hook form control instance */
  control: Control<FormValues, any>;

  /** React hook form error instance */
  errors?: FieldErrors<FormValues>;
};

export default function FormInput({
  type,
  placeholder,
  label,
  name,
  options,
  hideLabel,
  register,
  control,
  errors,
}: Props) {
  const [showDropDown, setShowDropDown] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const reactions = [
    {
      name: ProcessValues.VERY_UNFAIR,
      value: 1,
      icon: (
        <VeryUnfair className="w-6 md:w-[2.18763rem] h-6 md:h-[2.18763rem]" />
      ),
    },
    {
      name: ProcessValues.UNFAIR,
      value: 2,
      icon: <Unfair className="w-6 md:w-[2.18763rem] h-6 md:h-[2.18763rem]" />,
    },
    {
      name: ProcessValues.NOT_SURE,
      value: 3,
      icon: <NotSure className="w-6 md:w-[2.18763rem] h-6 md:h-[2.18763rem]" />,
    },
    {
      name: ProcessValues.FAIR,
      value: 4,
      icon: <Fair className="w-6 md:w-[2.18763rem] h-6 md:h-[2.18763rem]" />,
    },
    {
      name: ProcessValues.VERY_FAIR,
      value: 5,
      icon: (
        <VeryFair className="w-6 md:w-[2.18763rem] h-6 md:h-[2.18763rem]" />
      ),
    },
  ];
  
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
          <Controller
            name={name}
            control={control}
            rules={{ required: `${name} is required` }}
            render={({ field }) => (
              <div
                ref={selectRef}
                className="h-auto w-full max-w-[25.6875rem] bg-primary-white relative"
              >
                <input
                  type="text"
                  placeholder="Select Options"
                  onClick={() => setShowDropDown(!showDropDown)}
                  className={inputClasses.join(" ")}
                  value={
                    field.value
                      ? options.find((opt) => opt.value === field.value)?.label
                      : ""
                  }
                  readOnly
                />
                {showDropDown && (
                  <div className="w-full max-h-[10.68rem] overflow-y-auto flex items-start flex-col justify-start gap-[0.06rem] absolute bg-primary-white">
                    {options.map((option, ind) => (
                      <button
                        key={ind}
                        type="button"
                        onClick={() => {
                          field.onChange(option.value);
                          setShowDropDown(false);
                        }}
                        className={`${anonymous_Pro.className} text-normal text-base w-full h-[2.625rem] bg-light-grey text-left py-[0.375rem] px-[0.75rem]`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          />
        </div>
      );
    }

    if (type === "range") {
      return (
        <>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <div className="w-full hidden md:block">
                <input
                  type={type}
                  min={0}
                  max={5}
                  step={1}
                  className="w-full"
                  defaultValue={1}
                  {...field}
                />
                <div className="flex mt-7 w-full justify-center items-center gap-[5.25rem] mb-[1.88rem]">
                  {reactions.map((reaction) => (
                    <ReactionSmiley
                      key={reaction.value}
                      onClick={() => {
                        field.onChange(reaction.value);
                      }}
                      name={reaction.name}
                      value={reaction.value}
                      inputValue={
                        parseInt(field.value) ? parseInt(field.value) : 1
                      }
                    >
                      {reaction.icon}
                    </ReactionSmiley>
                  ))}
                </div>
              </div>
            )}
          />

          <div className="md:hidden flex flex-col items-center justify-center w-full gap-3">
            {reactions.map((item) => (
              <Controller
                key={item.value}
                name={`rating`}
                control={control}
                defaultValue={"1"}
                render={({ field }) => (
                  <MobileRating
                    onChange={field.onChange}
                    field={field}
                    rating={item.name}
                    value={item.value}
                  >
                    {item.icon}
                  </MobileRating>
                )}
              />
            ))}
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
      {errors && errors[name]?.message && (
        <small
          className={`${poppins.className} mt-[0.25rem] text-[0.875rem] text-error`}
        >
          {errors[name]?.message}
        </small>
      )}
    </div>
  );
}
