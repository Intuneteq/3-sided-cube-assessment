"use client";

import * as yup from "yup";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Modal } from "./";
import { Button, FormInput } from "../atoms";
import { Sticker } from "../molecules";

import { getNominees } from "@/app/select-nominee/actions";
import { findNominee, groupOptions } from "@/lib/utility";

type Props = {
  type: FormType;

  placeholder: string;

  label: string;

  name: Inputs;

  /** Single Button conatiner */
  singleBtn?: boolean;

  /** Path url for next button */
  nextPage: string;

  hideLabel?: boolean;

  // formAction: any;
};

// Dynamic resolver function based on the name
const createResolver = (name: keyof FormValues) => {
  const schema = yup
    .object({
      [name]: yup.string().required(),
    })
    .required();

  return yupResolver(schema) as any;
};

export default function Rhf({
  type,
  placeholder,
  label,
  name,
  singleBtn,
  nextPage,
  hideLabel,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const queryClient = useQueryClient();

  const { data, error } = useQuery({
    queryKey: ["nominees"],
    queryFn: getNominees,
  });

  const preFormData = queryClient.getQueryData<FormValues>(["formData"]);

  if (error) throw new Error(error.message);

  if (!data) throw new Error("No data");

  const nominees = groupOptions(data);

  const form = useForm<FormValues>({
    resolver: createResolver(name),
    defaultValues: {
      nominee: preFormData?.nominee,
      rating: preFormData?.rating,
      reasoning: preFormData?.reasoning,
    },
  });

  const { handleSubmit, formState, register, control } = form;

  const { errors, isValid } = formState;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("Submitting data:", data);

    if (data.nominee) {
      const nominees = queryClient.getQueryData<Nominee[]>(["nominees"]);

      if (!nominees) return;

      const nominee = findNominee(nominees, data.nominee);

      queryClient.setQueryData(["nominee"], (cachedData: Nominee) => {
        return { ...cachedData, ...nominee };
      });
    }

    // Set the form data in a query key
    queryClient.setQueryData(["formData"], (cachedData: FormValues) => {
      return {
        ...cachedData,
        ...data,
      };
    });

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
            hideLabel={hideLabel}
            register={register}
            options={nominees}
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
              href={nextPage}
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
              href={nextPage}
              disable={!isValid}
              inactive={!isValid}
            >
              next
            </Button>
          </div>
        )}

        {/* Action Buttons only visible on mobile */}
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
            href={nextPage}
            disable={!isValid}
            inactive={!isValid}
          >
            next
          </Button>
        </Sticker>
      </form>

      {/* Leave Page Modal */}
      {showModal && (
        <Modal
          confirmation="Yes, leave page"
          heading="Are You sure?"
          message="If you leave this page, you will lose any progress made."
          onClick={() => setShowModal(false)}
        />
      )}
    </>
  );
}
