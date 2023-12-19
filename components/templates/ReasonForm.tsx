"use client";

import React from "react";
import * as yup from "yup";
import { DefaultValues } from "react-hook-form";

import { Rhf } from "../organisms";

import useGetUrlStrings from "@/hooks/useGetUrlStrings";

const schema = yup
  .object({
    reason: yup.string().required(),
  })
  .required();

type Reason = {
  reason: string;
};

export default function ReasonForm() {
  const { reason } = useGetUrlStrings();

  const defaultValues: Reason = {
    reason: reason ?? "",
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
