"use client";

import { ModalCard } from "@/components/molecules";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <ModalCard
      heading="Error"
      message={error.message}
      confirmation="Reset"
      confirmationBtnType="button"
      confirmationOnClick={() => reset()}
      revert="Home"
      revertBtnType="link"
      revertHref="/"
      error
    />
  );
}
