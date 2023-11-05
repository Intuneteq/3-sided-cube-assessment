'use client'

import { ModalCard } from "@/components/molecules";
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <ModalCard
    heading="Error"
    message={"Could not find requested resource"}
    confirmation="Back"
    confirmationBtnType="button"
    confirmationOnClick={() => router.back()}
    revert="Home"
    revertBtnType="link"
    revertHref="/"
    error
  />
  );
}
