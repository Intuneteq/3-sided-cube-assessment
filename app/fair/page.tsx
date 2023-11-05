import { Metadata } from "next";

import {
  Fair as FairIcon,
  ReactionSmiley,
  VeryUnfair,
  Unfair,
  NotSure,
  VeryFair,
} from "@/components/atoms";
import { ContainerII } from "@/components/molecules";

export const metadata: Metadata = {
  title: "Select Fairness",
  description: "What's your opinion on the method",
};

export default function Fair() {
  return (
    <main className="flex justify-start md:justify-center items-center w-full md:min-h-screen gap-2 flex-col md:py-5">
      <ContainerII
        heading="IS HOW WE CURRENTLY RUN CUBE OF THE MONTH FAIR?"
        content="As you know, out the nominees chosen, we spin a wheel to pick the cube of the month. What’s your opinion on this method?"
        img="/img3.png"
      >
        <div className="w-full">
          <input
            type="range"
            min={1}
            max={5}
            value={4}
            step={1}
            className="w-full"
          />

          <div className="mt-7 w-full flex justify-center items-center gap-[5.25rem] mb-[1.88rem]">
            <ReactionSmiley name="Very Unfair">
              <VeryUnfair className="w-[2.18763rem] h-[2.18763rem]" />
            </ReactionSmiley>
            <ReactionSmiley name="unfair">
              <Unfair className="w-[2.18763rem] h-[2.18763rem]" />
            </ReactionSmiley>
            <ReactionSmiley name="not sure">
              <NotSure className="w-[2.18763rem] h-[2.18763rem]" />
            </ReactionSmiley>
            <ReactionSmiley name="fair">
              <FairIcon className="w-[2.18763rem] h-[2.18763rem]" />
            </ReactionSmiley>
            <ReactionSmiley name="very fair">
              <VeryFair className="w-[2.18763rem] h-[2.18763rem]" />
            </ReactionSmiley>
          </div>
        </div>
      </ContainerII>
    </main>
  );
}
