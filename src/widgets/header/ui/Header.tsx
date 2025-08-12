import { useCallback, useState } from 'react'
import style from './Header.module.css'
import { useNavigator } from '@/shared/hook'
import { useDashboard } from '@/app/context/DashboardContext'
import { LoginModal } from '@/widgets/loginModal'

function Header() {
    /* Hooke 으로 변경 가능 */
    const { navigate } = useNavigator()
    const handleRegister = useCallback(() => {
        navigate('register')
    }, [])

    const [showLogin, setShowLogin] = useState(false)
    const handleLogin = useCallback(() => {
        /* TODO : Login Modal 이건 Page 이든 Login UI로 전환 해야함 */
        // alert('[개발중] 로그인 UI로 이동')
        setShowLogin(true)
    }, [])
    /* Hook 으로 변경 가능 */

    const { setTitle, title } = useDashboard()

    return (
        <header className={style.header}>
            <div className={style.left}>
                <h2>{title}</h2>
            </div>
            <div className={style.right}>
                <button
                    onClick={() => {
                        setTitle('Header Title Changed')
                    }}
                >
                    DEV_HeaderTitle 변경
                </button>
                <button onClick={handleLogin}>로그인</button>
                {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
                <button className="outline" onClick={handleRegister}>
                    회원가입
                </button>
            </div>
        </header>
    )
}

export default Header
