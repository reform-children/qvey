import { useAuth } from '@/shared/hook/useAuth'
import style from './LoginStatus.module.css'
import { useCallback } from 'react'
export default function LoginStatus() {
    const { accessToken } = useAuth()

    const handleLoginButton = useCallback(() => {}, [])
    return (
        <div className={style.container}>
            <span>icon</span>
            <span onClick={handleLoginButton}>로그인</span>
            {accessToken}
        </div>
    )
}
