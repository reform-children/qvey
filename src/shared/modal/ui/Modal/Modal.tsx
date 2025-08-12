import type { ModalProps } from './types'
import styles from './Modal.module.css'
import { useEffect } from 'react'

const Modal = ({ onClose, children }: ModalProps) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
        document.addEventListener('keydown', handleEsc)
        return () => document.removeEventListener('keydown', handleEsc)
    }, [onClose])
    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose} aria-label="닫기">
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal
