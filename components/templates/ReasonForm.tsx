'use client'

import React from "react";
import * as yup from "yup";
import { DefaultValues } from "react-hook-form";

import { Rhf } from "../organisms";

const schema = yup
  .object({
    reason: yup.string().required(),
  })
  .required();

type Reason = {
  reason: string;
};

export default function ReasonForm() {
  const defaultValues: Reason = {
    reason: "",
  };

  return (
    <Rhf<Reason>
      nextPage="process"
      type="textarea"
      placeholder="Reasoning"
      label="Reasoning"
      name="reason"
      defaultValues={defaultValues as DefaultValues<Reason>}
      validationSchema={schema}
    />
  );
}
