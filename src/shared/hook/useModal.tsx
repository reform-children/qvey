import { ModalContext } from '@/app/context'
import { useContext } from 'react'

export const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error('500 Modal Context Null Error')
    }
    return { ...context }
}
