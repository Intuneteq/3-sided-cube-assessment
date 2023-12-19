import { axiosClient } from "@/api/axios";
import { processPayload } from "@/lib/utility";

export async function getNominations(): Promise<Nomination[]> {
  const res = await axiosClient.get("/nomination");
  return res.data.data;
}

export async function createNomination(
  data: Partial<Nomination>
): Promise<INomination> {
  const res = axiosClient.post("/nomination", data);

  return (await res).data.data;
}

export async function editNomination(
  data: Partial<Nomination>
): Promise<Nomination> {
  const res = await axiosClient.put(`/nomination/${data.nomination_id}`, data);

  return res.data.data;
}

export async function deleteNomination(id: string): Promise<string> {
  const res = await axiosClient.delete(`/nomination/${id}`);
  return res.data.data;
}
