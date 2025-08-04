import { useMutation } from '@tanstack/react-query'
import { login } from './loginApi'
import type { LoginParams, LoginResponse } from '../types'
import { ToastError } from '@/shared/errors'
import { useToast } from '@/widgets/toast/hooks'

export const useLoginMutation = () => {
    const { addToast } = useToast() // useToast 훅을 사용하여 토스트 추가 함수 가져오기
    return useMutation<LoginResponse, Error, LoginParams>({
        mutationFn: login,
        onSuccess: (data) => {
            // 토큰 저장 로직 등도 여기에 작성 가능
            // localStorage.setItem('token', data.token)
            console.log('로그인 성공:', data)
        },
        onError: (error) => {
            if (error instanceof ToastError) {
                addToast({ message: error.message, type: error.toastType })
            } else {
                addToast({ message: '알 수 없는 에러가 발생했습니다.', type: 'error' })
            }
        },
    })
}
