import { axiosClient } from "@/api/axios";
import { processValue } from "@/lib/utility";

export async function nominate(formValues: FormValues): Promise<CreateNomineeResponse> {
  const data = {
    nominee_id: formValues.nominee,
    reason: formValues.reasoning,
    process: processValue(parseInt(formValues.rating)),
  };

  const res = await axiosClient.post("/nominee", data);
  return res.data.data;
}
