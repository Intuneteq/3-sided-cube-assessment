import React from "react";
import Link from "next/link";

import { poppins } from "@/fonts";
import { isURL } from "@/lib/utility";

type Props = {
  /** Type of HTML element - button element, anchor element or Next Link */
  type: BtnType;

  /** Button design type */
  scheme: "primary" | "secondary";

  /** Button width in tailwind class e.g w-8 - If time permits, add regex validation */
  width: string;

  /** Button Height in tailwind class e.g h-8 - If time permits, add regex validation */
  height: string;

  /** React child component */
  children: React.ReactNode;

  /** Disable button hover properties*/
  disable?: boolean;

  /** Inactive styling on Button */
  inactive?: boolean;

  /** Href property for Link and Anchor */
  href?: string;

  /** Button Text Size */
  textSize?: string;

  onClick?: () => void;
};

export default function Button({
  scheme,
  type,
  width,
  height,
  children,
  disable,
  inactive,
  href,
  textSize,
  onClick
}: Props) {
  let classes: Array<string> = [
    "transition",
    "transition-colors",
    "duration-700",
    "flex",
    "items-center",
    "justify-center",
    "shadow-light",
    ` ${poppins.className}`,
    "text-[0.875rem]",
    "font-bold",
    "uppercase",
    "tracking-[0.2px]",
    width,
    height,
  ];

  if (textSize) {
    classes = [...classes, textSize];
  }

  if (scheme === "primary") {
    classes = [
      ...classes,
      "bg-primary-black",
      "text-primary-white",
      "hover:bg-primary-white",
      "hover:text-primary-black",
      "hover:border",
      "hover:border-2",
    ];

    if (disable) {
      classes = classes.filter(
        (item) =>
          !item.includes("hover:bg-primary-white") &&
          !item.includes("hover:border") &&
          !item.includes("hover:text-primary-black")
      );
    }

    if (inactive) {
      classes = classes.filter((item) => !item.includes("bg-primary-black"));
      classes = [...classes, "bg-mid-grey", "text-white"];
    }
  }

  if (scheme === "secondary") {
    classes = [
      ...classes,
      "bg-primary-white",
      "text-primary-black",
      "hover:border-primary-pink",
      "border-solid",
      "border-2",
      "border-primary-black",
    ];

    if (disable) {
      classes = classes.filter(
        (item) => !item.includes("hover:border-primary-pink")
      );
    }

    if (inactive) {
      classes = [...classes, "border-mid-grey"];
    }
  }

  if (type === "button") {
    return (
      <button type="button" onClick={onClick} disabled={disable} className={classes.join(" ")}>
        {children}
      </button>
    );
  }

  if (type === "submit") {
    return (
      <button type="submit" disabled={disable} className={classes.join(" ")}>
        {children}
      </button>
    );
  }

  if (type === "link") {
    if (!href) throw new Error("Href prop needed on Link Element");

    return (
      <Link className={classes.join(" ")} href={href}>
        {children}
      </Link>
    );
  }

  if (type === "anchor") {
    if (!href) throw new Error("Anchor tags must have the 'href' prop.");

    if (!isURL(href))
      throw new Error(
        "Href prop must be a valid URL (e.g., http://example.com)."
      );

    return (
      <a
        className={classes.join(" ")}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
}
