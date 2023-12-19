"use client";

import React from "react";
import * as yup from "yup";
import { DefaultValues } from "react-hook-form";

import { Rhf } from "../organisms";

import useGetUrlStrings from "@/hooks/useGetUrlStrings";

const schema = yup
  .object({
    process: yup.string().required(),
  })
  .required();

type Process = {
  process: number;
};

export default function ProcessForm() {
  const { process } = useGetUrlStrings();

  const defaultValues: Process = {
    process: process.value ? parseInt(process.value) : 1,
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
