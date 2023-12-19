import { useSearchParams } from "next/navigation";

import { keys, useGetQueryData } from "@/lib/useNominees";
import { processPayload, processValue } from "@/lib/utility";

export default function useGetUrlStrings() {
  const searchParams = useSearchParams();
  const nominees = useGetQueryData(keys.getNominees);

  const nominee_id = decodeURIComponent(searchParams.get("nominee") as string);
  const value = decodeURIComponent(searchParams.get("process") as string);
  const reason = decodeURIComponent(searchParams.get("reason") as string);

  const nominee = nominees?.find((item) => item.nominee_id === nominee_id);

  const payload = processPayload(parseInt(value));

  const label = processValue(parseInt(value));

  const process = { payload, value, label };

  const state = `nominee=${nominee?.nominee_id}&reason=${reason}&process=${process.value}`;

  return { reason, nominee, process, state };
}
