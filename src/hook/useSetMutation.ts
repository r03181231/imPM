import { queryClient } from "@/app/provider";
import { TTodo } from "@/types/type";
import { MutationFunction, useMutation } from "@tanstack/react-query";
//<TypeData>는 함수 useMutation의 제네릭 타입 매개변수.
// Promise의 반환 유형을 지정하거나, 함수의 파라미터 유형을 정의.

const useSetMutation = (
  fc: MutationFunction<void, TTodo>,
  queryKey: string
) => {
  const mutation = useMutation<void, unknown, TTodo, unknown>({
    mutationFn: fc,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
    onError: () => {
      console.error("오류가 발생했습니다.");
    },
  });
  return { mutation };
};
export default useSetMutation;
