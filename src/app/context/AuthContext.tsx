import { createContext, useCallback, useMemo, useState, type PropsWithChildren } from 'react'

interface AuthContext {
    /**
     * set accessToken
     * @param token AccessToken
     * @returns
     */
    setAccessToken: (token: string) => void

    /**
     * accessToken
     */
    accessToken?: string
}
export const AuthContext = createContext<AuthContext | undefined>(undefined)

export function AuthProvider({ children }: PropsWithChildren) {
    const [accessToken, setAccessToken] = useState<string | undefined>()

    const _setAccessToken = useCallback((token: string) => {
        setAccessToken(token)
    }, [])

    const result = useMemo(
        () => ({
            setAccessToken: _setAccessToken,
            accessToken,
        }),
        [accessToken]
    )

    return <AuthContext value={result}>{children}</AuthContext>
}
