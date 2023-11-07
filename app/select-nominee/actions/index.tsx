import { redirect } from "next/navigation";

import { axiosClient } from "@/api/axios";

import { QueryClient } from "@tanstack/react-query";

import { SubmitHandler } from "react-hook-form";

export const selectNominee: SubmitHandler<FormValues> = async (data) => {
  const queryClient = new QueryClient();

  // Set the form data in a query key
  await queryClient.setQueryData(["formData"], {
    nominee: data.nominee,
  });

  console.log("what", data);
  redirect('/reason')
};

export async function getNominees(): Promise<Nominee[]> {
  // try {
    const res = await axiosClient.get("/nominee");
    return res.data.data;
  // } catch (error: any) {
  //   throw new Error(error.message);
  // }
}
