import { useQuery } from "@tanstack/react-query";

import { getNominees } from "@/app/select-nominee/actions";

const keys = {
  cache: ["cache"],
  getNominees: ["nominees"],
};

export function useGetNominees() {
  return useQuery({
    queryFn: getNominees,
    queryKey: keys.getNominees,
  });
}
