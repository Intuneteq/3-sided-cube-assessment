"use client";

import React from "react";
import { ContainerII } from ".";
import { Rhf } from "../organisms";
import { useQueryClient } from "@tanstack/react-query";

export default function ReasonClient() {
  return (
    <ContainerII
      content="Please let us know why you think this cube deserves the ‘cube of the month’ title 🏆⭐"
      toDecorate="DAVID"
      heading="I’d like to nominate DAVID because..."
      img="/img3.png"
      progress="50%"
    >
      <div className="w-full">
        <Rhf
          nextPage="rating"
          type="textarea"
          placeholder="Reasoning"
          label="Reasoning"
          name="reasoning"
        />
      </div>
    </ContainerII>
  );
}
