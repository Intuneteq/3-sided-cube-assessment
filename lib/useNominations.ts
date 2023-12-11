import { createNomination } from "@/app/nominations/actions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const keys = {
  getNominations: ["nominations"],
};

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
      options.onSuccess;
    },
  });
}
