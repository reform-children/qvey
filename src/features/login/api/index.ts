import type { LoginParams } from '../types'

export function login({ email, password }: LoginParams) {
    return fetch('http://localhost:3000/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
}
