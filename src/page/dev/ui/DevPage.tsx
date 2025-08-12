import styles from './DevPage.module.css'
import { VisibilityOffRounded, VisibilityRounded } from '@mui/icons-material'

import { useState } from 'react'

function DevPage() {
    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
        setShowPassword((prev) => !prev)
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome Back 🥳</h1>
            <h2 className={styles.subtitle}>이메일과 비밀번호를 입력해 서비스를 시작해주세요</h2>
            <form>
                <div className={styles.formField}>
                    <label htmlFor="ID">Email</label>
                    <input id="ID" placeholder="test@example.com" />
                    <span className={styles.message}>올바른 이메일 형식을 입력하세요.</span>
                </div>

                <div className={styles.formField}>
                    <label htmlFor="PASS">Password</label>
                    <div className={styles.passwordWrapper}>
                        <input id="PASS" type={showPassword ? 'text' : 'password'} placeholder="••••••••" />
                        <button
                            type="button"
                            className={styles.iconButton}
                            onClick={togglePassword}
                            aria-label="Toggle password visibility"
                        >
                            {showPassword ? <VisibilityRounded /> : <VisibilityOffRounded />}
                        </button>
                    </div>
                    <span className={styles.message}>비밀번호는 8자 이상이어야 합니다.</span>
                </div>

                <div className={styles.row}>
                    <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </label>
                    <a href="#" className={styles.link}>
                        Forgot Password?
                    </a>
                </div>

                <button className={styles.loginBtn}>Login</button>
            </form>
            <div className={styles.signupBox}>
                <span>계정이 없으신가요?</span>
                <a href="#" className={styles.link}>
                    회원가입하러 가기
                </a>
            </div>
        </div>
    )
}

export default DevPage
