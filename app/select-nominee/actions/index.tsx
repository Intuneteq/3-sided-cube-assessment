import { axiosClient } from "@/api/axios";

export async function getNominees(): Promise<Nominee[]> {
  const res = await axiosClient.get("/nominee");
  return res.data.data;
}
