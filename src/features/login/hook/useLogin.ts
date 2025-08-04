import { useLoginMutation } from '../api'

export const useLogin = () => {
    const { mutateAsync: login, data, error, isPending } = useLoginMutation()
    // TODO: 로그인 실패 후 상태 초기화를 위핸 reset 함수 추가 고려
    return { login, data, error: error?.message ?? null, loading: isPending }
}
