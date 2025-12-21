import { login } from '../api'
import type { LoginParams, LoginResponse } from '../types'

/**
 * TODO
 * - validataion
 */
export function loginRequest({ email, password }: LoginParams): Promise<LoginResponse> {
    if (!email) {
        throw new Error('400 email null error')
    }

    if (!password) {
        throw new Error('400 password null error')
    }

    return login({ email, password })
        .then((response) => response.json())
        .catch((err) => {
            // TODO
            // 예외 처리 좀더 명확 하게
            console.error(err)
            throw new Error('400 | 500 로그인에 실패 하였습니다.')
        })
}
