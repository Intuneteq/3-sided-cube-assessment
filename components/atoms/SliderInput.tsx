"use client";

import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { FieldValues, Controller, Path, Control } from "react-hook-form";

import { ReactionSmiley } from "./";
import {
  Fair,
  NotSure,
  Unfair,
  VeryFair,
  VeryUnfair,
} from "@/components/atoms";

import { ProcessValues } from "@/lib/constants";
import useAppStyling from "@/hooks/useAppStyling";

type Props<T extends FieldValues> = {
  name: Path<T>;

  control: Control<T>;
};

export default function SliderInput<T extends FieldValues>({
  name,
  control,
}: Props<T>) {
  const { sliderStyle } = useAppStyling();

  const StyledSlider = styled(Slider)(sliderStyle);

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

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <div className="w-full hidden md:block">
            <StyledSlider
              valueLabelDisplay="auto"
              value={value}
              aria-label={name}
              defaultValue={1}
              onChange={(_, value) => {
                onChange(value);
              }}
              step={1}
              max={5}
              min={1}
            />
            <div className="flex mt-7 w-full justify-center items-center gap-[5.25rem] mb-[1.88rem]">
              {reactions.map((reaction) => (
                <ReactionSmiley
                  key={reaction.value}
                  onClick={() => {
                    onChange(reaction.value);
                  }}
                  name={reaction.name}
                  value={reaction.value}
                  inputValue={value}
                >
                  {reaction.icon}
                </ReactionSmiley>
              ))}
            </div>
          </div>
        )}
      />
    </div>
  );
}
