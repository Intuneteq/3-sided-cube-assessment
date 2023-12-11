"use client";

import React from "react";
import * as yup from "yup";

import { DefaultValues } from "react-hook-form";
import { Rhf } from "../organisms";
import { useGetNominees } from "@/lib/useNominees";

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

  const { data, error, isError } = useGetNominees();

  if (isError && error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("Error Fetching Nominees");
  }

  const options: SelectOption[] = data.map((option) => {
    return {
      value: option.nominee_id,
      label: option.first_name + " " + option.last_name,
    };
  });

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
