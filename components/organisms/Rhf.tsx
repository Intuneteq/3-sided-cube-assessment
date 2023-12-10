"use client";

import * as yup from "yup";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  DefaultValues,
  Path,
} from "react-hook-form";

import { Modal } from "./";
import { Button, FormInput } from "../atoms";
import { Sticker } from "../molecules";

type Props<T extends FieldValues> = {
  type: FormType;

  placeholder: string;

  label: string;

  name: Path<T>;

  defaultValues: DefaultValues<T>;

  /** Single Button conatiner */
  singleBtn?: boolean;

  /** Path url for next button */
  nextPage: string;

  /** Hide form label */
  hideLabel?: boolean;

  // children: ReactNode;

  validationSchema: yup.AnyObjectSchema;

  options?: SelectOption[];
};

export default function Rhf<T extends FieldValues>({
  type,
  placeholder,
  label,
  name,
  validationSchema,
  defaultValues,
  options,
  singleBtn,
  hideLabel,
  nextPage,
}: Props<T>) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const form = useForm<T>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit, formState, register, control } = form;

  const { errors, isValid } = formState;

  const onSubmit: SubmitHandler<T> = async (data) => {
    console.log("data", data);

    router.push(`/${nextPage}`, { scroll: false });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-8">
          <FormInput
            type={type}
            placeholder={placeholder}
            label={label}
            name={name}
            options={options}
            hideLabel={hideLabel}
            register={register}
            control={control}
            errors={errors}
          />
        </div>

        {/* Action buttons only visible on Desktop */}
        {singleBtn ? (
          <div className="w-full hidden md:flex justify-center items-center">
            <Button
              scheme="primary"
              type="submit"
              width="w-[13.9375rem]"
              height="h-[3.125rem]"
            >
              Submit
            </Button>
          </div>
        ) : (
          <div className="justify-between items-center hidden md:flex w-full">
            <Button
              scheme="secondary"
              type="button"
              width="w-[6.5rem]"
              height="h-[3.125rem]"
              onClick={() => setShowModal(true)}
            >
              Back
            </Button>
            <Button
              scheme="primary"
              type="submit"
              width="w-[13.9375rem]"
              height="h-[3.125rem]"
              disable={!isValid}
              inactive={!isValid}
            >
              next
            </Button>
          </div>
        )}

        <Sticker stack="horizontal">
          <Button
            scheme="secondary"
            type="button"
            width="w-[6.25rem]"
            height="h-[3.08594rem]"
            textSize="text-[0.875rem]"
            onClick={() => setShowModal(true)}
          >
            Back
          </Button>
          <Button
            scheme="primary"
            type="submit"
            width="w-[13.3125rem]"
            height="h-[3.0625rem]"
            textSize="text-[0.875rem]"
            disable={!isValid}
            inactive={!isValid}
          >
            next
          </Button>
        </Sticker>
      </form>
      {showModal ? (
        <Modal
          confirmation="Yes, leave page"
          heading="Are You sure?"
          message="If you leave this page, you will lose any progress made."
          confirmationAction={() => router.back()}
          onClick={() => setShowModal(false)}
        />
      ) : null}
    </>
  );
}
