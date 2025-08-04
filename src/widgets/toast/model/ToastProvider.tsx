import { useState, type PropsWithChildren } from 'react'
import type { ToastItemProps } from '../types'
import { ToastContext } from './ToastContext'

export const ToastProvider = ({ children }: PropsWithChildren) => {
    const [toasts, setToasts] = useState<ToastItemProps[]>([])

    const addToast = (toast: Omit<ToastItemProps, 'id'>) => {
        const id = crypto.randomUUID()
        const newToast = {
            ...toast,
            id,
        }

        setToasts((prev) => [...prev, newToast])
        setTimeout(() => removeToast(id), 5000)
    }

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }

    return <ToastContext value={{ toasts, addToast, removeToast }}>{children}</ToastContext>
}
