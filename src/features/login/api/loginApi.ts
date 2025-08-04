import { isAxiosError } from 'axios'
import { LOGIN_API } from '../../../shared/config'
import type { LoginParams, LoginResponse } from '../types'
import { ToastError } from '@/shared/errors'
import axiosInstance from '@/shared/api/axios'

export const login = async (params: LoginParams): Promise<LoginResponse> => {
    try {
        const response = await axiosInstance.post<LoginResponse>(LOGIN_API, params)

        const { token, user } = response.data

        if (!token || !user) {
            throw new ToastError('토큰 또는 사용자 정보가 누락되었습니다.', 'error')
        }

        return { token, user }
    } catch (error: unknown) {
        if (isAxiosError(error)) {
            const message = error.response?.data?.message || '로그인에 실패하였습니다.'
            throw new ToastError(message, 'error')
        }

        throw new ToastError('알 수 없는 에러가 발생했습니다.', 'error')
    }
}
