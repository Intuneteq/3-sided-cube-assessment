import { useSearchParams } from "next/navigation";

import { keys, useGetQueryData } from "@/lib/useNominees";
import { processPayload, processValue } from "@/lib/utility";

export default function useGetUrlStrings() {
  const searchParams = useSearchParams();
  const nominees = useGetQueryData(keys.getNominees);

  const nomineeRaw = searchParams.get("nominee");
  const nominationRaw = searchParams.get("nomination_id");
  const processRaw = searchParams.get("process");
  const reasonRaw = searchParams.get("reason");

  const nominee_id = nomineeRaw ? decodeURIComponent(nomineeRaw) : "";
  const nomination_id = nominationRaw ? decodeURIComponent(nominationRaw) : "";
  const value = processRaw ? decodeURIComponent(processRaw) : "";
  const reason = reasonRaw ? decodeURIComponent(reasonRaw) : "";

  const nominee = nominees?.find((item) => item.nominee_id === nominee_id);

  const payload = value ? processPayload(parseInt(value)) : "";

  const label = value ? processValue(parseInt(value)) : "";

  const process = { payload, value, label };

  const state = `nominee=${nominee?.nominee_id}&reason=${reason}&process=${process.value}`;

  return { reason, nominee, process, state, nomination_id };
}
