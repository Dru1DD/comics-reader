import { useCallback } from 'react';
import { DefaultError, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthApi } from '../../providers/ApiProvider';
import { SignParams } from '../../api/auth-api';

const useSignInMutation = () => {
  const authApi = useAuthApi();

  const queryClient = useQueryClient();

  const handleMutationSuccess = useCallback(async () => {
    await queryClient.invalidateQueries({ queryKey: ['current-user'] });
  }, [queryClient]);

  return useMutation<void, DefaultError, SignParams>({
    mutationFn: (params: SignParams) => authApi.signIn(params),
    onSuccess: handleMutationSuccess,
  });
};

export default useSignInMutation;
