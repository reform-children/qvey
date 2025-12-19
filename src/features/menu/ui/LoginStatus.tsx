import { useAuth } from '@/shared/hook/useAuth'
import style from './LoginStatus.module.css'
import { useCallback } from 'react'
import { useModal } from '@/shared/hook/useModal'
export default function LoginStatus() {
    const { accessToken } = useAuth()
    const { open } = useModal()
    const handleLoginButton = useCallback(() => open('LOGIN'), [])
    return (
        <div className={style.container}>
            <i>I</i>
            <span onClick={handleLoginButton}>로그인</span>
            {accessToken}
        </div>
    )
}
