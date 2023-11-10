import { axiosClient } from "@/api/axios";
import { processPayload } from "@/lib/utility";
import { MutationFunction } from "@tanstack/react-query";

export async function getNominations(): Promise<Nomination[]> {
  const res = await axiosClient.get("/nomination");
  return res.data.data;
}

export async function createNomination(
  formValue: FormValues
): Promise<INomination> {
  const payload = {
    nominee_id: formValue.nominee,
    reason: formValue.reasoning,
    process: processPayload(parseInt(formValue.rating)),
  };

  const res = axiosClient.post("/nomination", payload);

  return (await res).data.data;
}

export async function updateNomination(
  formValue: FormValues
): Promise<INomination> {
  const payload = {
    nomination_id: formValue.nomination_id,
    nominee_id: formValue.nominee,
    reason: formValue.reasoning,
    process: processPayload(parseInt(formValue.rating)),
  };
  const res = await axiosClient.put(
    `/nomination/${formValue.nomination_id}`,
    payload
  );

  return res.data.data;
}

export async function deleteNomination(id: string): Promise<string> {
  const res = await axiosClient.delete(`/nomination/${id}`);
  return res.data.data;
}
