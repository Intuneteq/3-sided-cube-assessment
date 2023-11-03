import Image from "next/image";

import { poppins } from "@/fonts";
import { Button, LoaderIcon } from "@/components/atoms";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full min-h-screen gap-2 flex-col">
      <button disabled={true} className=" border-solid border-4">vv</button>

      <Button scheme="primary" type="button" width="w-[327px]" height="h-[50px]" disable>
        <LoaderIcon className="w-[24px] h-[26px] animate-spin-slow" stroke="white"  />
      </Button>
      <Button scheme="primary" type="button" width="w-[327px]" height="h-[50px]">Primary</Button>
      <Button scheme="primary" type="button" width="w-[327px]" height="h-[50px]" inactive disable>Primary Inactive</Button>

      <Button scheme="secondary" type="link" width="w-[327px]" href="/" height="h-[50px]" disable>
        <LoaderIcon className="w-[24px] h-[26px] animate-spin-slow" stroke="black"  />
      </Button>
      <Button scheme="secondary" type="link" width="w-[327px]" height="h-[50px]" href="/">Secondary</Button>
      <Button scheme="secondary" type="button" width="w-[327px]" height="h-[50px]" inactive disable>Secondary Inactive</Button>

      <Button scheme="secondary" type="anchor" width="w-[327px]" height="h-[50px]" href="https://tobiolanitori.com">Anchor</Button>
    </main>
  );
}
