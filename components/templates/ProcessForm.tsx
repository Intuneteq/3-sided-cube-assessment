'use client'

import React from "react";
import * as yup from "yup";
import { DefaultValues } from "react-hook-form";

import { Rhf } from "../organisms";

const schema = yup
  .object({
    process: yup.string().required(),
  })
  .required();

type Process = {
  process: string;
};

export default function ProcessForm() {
  const defaultValues: Process = {
    process: "",
  };

  return (
    <Rhf<Process>
      nextPage="overview"
      type="range"
      placeholder="process"
      name="process"
      hideLabel
      defaultValues={defaultValues as DefaultValues<Process>}
      validationSchema={schema}
    />
  );
}
