"use client";

import React from "react";
import * as yup from "yup";

import { DefaultValues } from "react-hook-form";
import { Rhf } from "../organisms";

const schema = yup
  .object({
    nominee: yup.string().required(),
  })
  .required();

type Nominee = {
  nominee: string;
};

export default function NomineeForm() {
  const defaultValues: Nominee = {
    nominee: "",
  };

  const options: SelectOption[] = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla1", label: "Vanilla" },
    { value: "vanilla2", label: "Vanilla" },
    { value: "vanilla3", label: "Vanilla" },
    { value: "vanilla4", label: "Vanilla" },
    { value: "vanilla4", label: "Vanilla" },
    { value: "vanilla4", label: "Vanilla" },
    { value: "vanilla4", label: "Vanilla" },
    { value: "vanilla4", label: "Vanilla" },
  ];
  return (
    <Rhf<Nominee>
      nextPage="reason"
      type="select"
      placeholder="Select Option"
      label="Cube&rsquo;s name"
      name="nominee"
      defaultValues={defaultValues as DefaultValues<Nominee>}
      validationSchema={schema}
      options={options}
    />
  );
}
