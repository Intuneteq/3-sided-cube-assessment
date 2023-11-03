import Image from "next/image";

import { poppins } from "@/fonts";
import { Button, FormInput, LoaderIcon } from "@/components/atoms";
import Link from "next/link";
import { StackCard } from "@/components/molecules";

export default function Home() {
  const options = [
    "Select Option",
    "Select Option",
    "Select Option",
    "Select Option",
  ];
  return (
    <main className="flex justify-center items-center w-full min-h-screen gap-2 flex-col py-5">
      <button
        disabled={true}
        className=" border-solid border-4 text-[0.875rem]"
      >
        vv
      </button>

      <Button
        scheme="primary"
        type="button"
        width="w-[327px]"
        height="h-[50px]"
        disable
      >
        <LoaderIcon
          className="w-[24px] h-[26px] animate-spin-slow"
          stroke="white"
        />
      </Button>
      <Button
        scheme="primary"
        type="button"
        width="w-[327px]"
        height="h-[50px]"
      >
        Primary
      </Button>
      <Button
        scheme="primary"
        type="button"
        width="w-[327px]"
        height="h-[50px]"
        inactive
        disable
      >
        Primary Inactive
      </Button>

      <Button
        scheme="secondary"
        type="link"
        width="w-[327px]"
        href="/"
        height="h-[50px]"
        disable
      >
        <LoaderIcon
          className="w-[24px] h-[26px] animate-spin-slow"
          stroke="black"
        />
      </Button>
      <Button
        scheme="secondary"
        type="link"
        width="w-[327px]"
        height="h-[50px]"
        href="/"
      >
        Secondary
      </Button>
      <Button
        scheme="secondary"
        type="button"
        width="w-[327px]"
        height="h-[50px]"
        inactive
        disable
      >
        Secondary Inactive
      </Button>

      <Button
        scheme="secondary"
        type="anchor"
        width="w-[327px]"
        height="h-[50px]"
        href="https://tobiolanitori.com"
      >
        Anchor
      </Button>

      <StackCard stack="none">
        <Button
          scheme="primary"
          type="button"
          width="w-[20.4375rem]"
          height="h-[3.125rem]"
          textSize="text-[0.875rem]"
        >
          Primary Stack
        </Button>
      </StackCard>

      <StackCard stack="none">
        <Button
          scheme="secondary"
          type="button"
          width="w-[20.4375rem]"
          height="h-[3.125rem]"
          textSize="text-[0.875rem]"
        >
          Secondary Stack
        </Button>
      </StackCard>

      <StackCard stack="vertical">
        <Button
          scheme="primary"
          type="button"
          width="w-[20.4375rem]"
          height="h-[3.125rem]"
          textSize="text-[0.875rem]"
        >
          Primary Stack
        </Button>
        <Button
          scheme="secondary"
          type="button"
          width="w-[20.4375rem]"
          height="h-[3.125rem]"
          textSize="text-[0.875rem]"
        >
          Secondary Stack
        </Button>
      </StackCard>
      <StackCard stack="horizontal">
        <Button
          scheme="secondary"
          type="button"
          width="w-[6.25rem]"
          height="h-[3.08594rem]"
          textSize="text-[0.875rem]"
        >
          Back
        </Button>
        <Button
          scheme="primary"
          type="button"
          width="w-[13.3125rem]"
          height="h-[3.0625rem]"
          textSize="text-[0.875rem]"
        >
          next
        </Button>
      </StackCard>

      <form action="">
        <FormInput
          type="text"
          placeholder="First Name"
          label="First Name"
          name="firstName"
        />
        <FormInput
          type="password"
          placeholder="password"
          label="Password"
          name="password"
        />
        <FormInput
          type="textarea"
          placeholder="Lorem Ipsum"
          label="Lorem Ipsum"
          name="Lorem Ipsum"
        />
        <FormInput
          type="select"
          options={options}
          placeholder="Country"
          label="Country"
          name="country"
        />
        <Button
          scheme="primary"
          type="submit"
          width="w-[13.3125rem]"
          height="h-[3.0625rem]"
          textSize="text-[0.875rem]"
        >
          submit
        </Button>
      </form>

      {/* <input type="text" className=" focus:border" /> */}
    </main>
  );
}
