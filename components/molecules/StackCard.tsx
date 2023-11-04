import React from "react";

type Props = {
  /** React child component */
  children: React.ReactNode;

  /** Stack Direction */
  stack: Stack;
};

export default function StackCard({ children, stack }: Props) {
  let classes = [
    "shadow-light",
    "py-[1.31rem]",
    "px-[1.5rem]",
    "flex",
    "justify-center",
    "items-center",
    "gap-[0.86rem]",
    "bg-primary-white"
  ];

  if (stack === "horizontal") {
    classes = [...classes, "flex-row"];
  }

  if (stack === "vertical") {
    classes = [...classes, "flex-col"];
  }

  if (stack === "none") {
    // classes = classes.filter((item) => !item.includes("flex"));
  }

  return (
    <div className={classes.join(" ")}>
      {children}
    </div>
  );
}
