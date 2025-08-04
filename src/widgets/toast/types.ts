export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastItemProps {
    id: string
    message: string
    type: ToastType
    buttonLabel?: string
    onButtonClick?: () => void
    onClose?: () => void
    size?: ToastSize
    animation?: ToastAnimation
}

export type ToastContextType = {
    toasts: ToastItemProps[]
    addToast: (toast: Omit<ToastItemProps, 'id'>) => void
    removeToast: (id: string) => void
}

/* ToastContainer */
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'

export type ToastSize = 'small' | 'medium' | 'large'

export type ToastAnimation = 'fade-in-right' | 'fade-in-bottom' | 'fade-in-up' | 'none'
export interface ToastContainerProps {
    position?: ToastPosition
    size?: ToastSize
    animation?: ToastAnimation
}
