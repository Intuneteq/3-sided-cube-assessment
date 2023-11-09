import { axiosClient } from "@/api/axios";
import { processPayload } from "@/lib/utility";
import { MutationFunction } from "@tanstack/react-query";

export async function getNominations(): Promise<Nomination[]> {
  const res = await axiosClient.get("/nomination");
  return res.data.data;
}

// export function createNomination(formValue: FormValues): MutationFunction<unknown, FormValues> | undefined {
//   const payload = {
//     nominee_id: formValue.nominee,
//     reason: formValue.reasoning,
//     process: processPayload(parseInt(formValue.rating)),
//   };

  
// }

// export function updateNomination(formValue: FormValues): MutationFunction<unknown, FormValues> | undefined {


//   return  as ;
// }
