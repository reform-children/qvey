import { LoginForm } from '@/features/login/ui'
import { Modal } from '@/shared/modal/ui/Modal'
import styles from './LoginModal.module.css'

const LoginModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <Modal onClose={onClose}>
            <h1 className={styles.title}>Welcome Back 🥳</h1>
            <h2 className={styles.subtitle}>이메일과 비밀번호를 입력해 서비스를 시작해주세요</h2>
            <LoginForm />
            <div className={styles.signupBox}>
                <span>계정이 없으신가요?</span>
                <a href="#" className={styles.link}>
                    회원가입하러 가기
                </a>
            </div>
        </Modal>
    )
}

export default LoginModal
