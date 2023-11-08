import { axiosClient } from "@/api/axios";

export async function getNominations(): Promise<Nomination[]> {
  const res = await axiosClient.get("/nomination");
  return res.data.data;
}

// export async function getNominationById(): Promise<