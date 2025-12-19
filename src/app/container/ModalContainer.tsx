import { useModal } from '@/shared/hook/useModal'
import { LoginModal } from '@/widgets/loginModal'
import type { ModalType } from '../context'

export default function ModalContainer() {
    const { stack, close } = useModal()

    return stack.map((modalType) => {
        const handleClose = () => close(modalType)
        switch (modalType) {
            case 'LOGIN':
                return <LoginModal key={modalType} onClose={handleClose} />
            case 'MODAL_1':
                return <p key={modalType}>Modal_1</p>
            default:
                return
        }
    })
}
