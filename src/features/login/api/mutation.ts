import { useMutation } from '@tanstack/react-query'
import { login } from './loginApi'
import type { LoginParams, LoginResponse } from '../types'

export const useLoginMutation = () => {
    return useMutation<LoginResponse, Error, LoginParams>({
        mutationFn: login,
    })
}
