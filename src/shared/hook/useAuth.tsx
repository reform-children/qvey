import { AuthContext } from '@/app/context'
import { useContext } from 'react'

export const useAuth = () => {
    const authContext = useContext(AuthContext)
    if (!authContext) {
        throw new Error('500 Auth Context null')
    }
    const accessToken = authContext.accessToken
    return { accessToken }
}
