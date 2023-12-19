import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useGetNominees } from "./useNominees";
import {
  getNominations,
  createNomination,
  deleteNomination,
  editNomination,
} from "@/app/nominations/actions";
import { mapProcessValue } from "@/lib/utility";

export const keys = {
  getNominations: ["nominations"],
};

export function useGetNomiations() {
  const { data: nominees } = useGetNominees();

  return useQuery({
    queryFn: getNominations,
    queryKey: keys.getNominations,
    select: (data) => {
      if (!nominees || !data) return [];

      return data.map((item) => {
        const nominee = nominees.find((i) => i.nominee_id === item.nominee_id);

        return {
          nomination_id: item.nomination_id,
          full_name: nominee
            ? nominee.first_name + " " + nominee.last_name
            : "",
          nominee_id: nominee?.nominee_id,
          reason: item.reason,
          process: mapProcessValue(item.process),
          date_submitted: item.date_submitted,
          closing_date: item.closing_date,
        };
      });
    },
  });
}

export function useCreateNomination(options: NominationOptions) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      return await createNomination(options.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keys.getNominations,
      });
      options.onSuccess();
    },
  });
}

export function useEditNomination(options: NominationOptions) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      return await editNomination(options.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keys.getNominations,
      });
      options.onSuccess();
    },
  });
}

export function useDeleteNomination(options: NominationOptions) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      return await deleteNomination(options.data.nomination_id!);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keys.getNominations,
      });
      options.onSuccess();
    },
  });
}
