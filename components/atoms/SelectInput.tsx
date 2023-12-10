"use client";

import React from "react";
import Select from "react-select";
import {
  FieldValues,
  Controller,
  Path,
  Control,
} from "react-hook-form";

import useAppStyling from "@/hooks/useAppStyling";

type Props<T extends FieldValues> = {
  name: Path<T>;

  options: SelectOption[];

  placeholder: string;

  control: Control<T>;
};

export default function SelectInput<T extends FieldValues>({
  name,
  options,
  placeholder,
  control,
}: Props<T>) {
  const { setSelectStyle } = useAppStyling();

  const customStyles = setSelectStyle();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, name } }) => (
        <Select
          isMulti={false}
          value={options!.find((c) => c.value === value)}
          name={name}
          options={options}
          placeholder={placeholder}
          onChange={(selectedOption) => {
            onChange(selectedOption?.value);
          }}
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={customStyles}
          isSearchable={false}
        />
      )}
    />
  );
}
