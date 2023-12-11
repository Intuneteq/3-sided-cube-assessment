import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getNominees } from "@/app/select-nominee/actions";

export const keys = {
  getNominees: ["nominees"],
};

export function useGetNominees() {
  return useQuery({
    queryFn: getNominees,
    queryKey: keys.getNominees,
  });
}

export function useGetQueryData(key: string[]) {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<Nominee[]>(key);
}
