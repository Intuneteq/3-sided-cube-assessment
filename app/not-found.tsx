'use client'

import { ModalCard } from "@/components/molecules";
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <ModalCard
    heading="PAGE NOT FOUND"
    message={"Could not find requested resource"}
    confirmation="Go Back"
    confirmationBtnType="button"
    confirmationOnClick={() => router.back()}
    revert="Go Home"
    revertBtnType="link"
    revertHref="/"
    error
  />
  );
}
