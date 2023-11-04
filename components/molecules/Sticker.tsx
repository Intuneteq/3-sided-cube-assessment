import React from "react";

import { StackCard } from "./";
import { Button } from "../atoms";

type Props = {
  children: React.ReactNode;
  stack: Stack;
};

export default function Sticker({ children, stack }: Props) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0">
      <StackCard stack={stack}>{children}</StackCard>
    </div>
  );
}
