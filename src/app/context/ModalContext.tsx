import { createContext, useReducer, type PropsWithChildren } from 'react'

interface ModalContext {
    /**
     * Modal Key Stack
     */
    stack: ModalType[]
    /**
     * Modal Open
     * @param key Modal Key
     */
    open: (key: ModalType) => void

    /**
     * 열린 modal 중에서 modalType 닫는 함수
     */
    close: (modalType: ModalType) => void
}

export type ModalType = 'LOGIN' | 'MODAL_1'
export const ModalContext = createContext<ModalContext | undefined>(undefined)

/**
 * Modal Reducer 가 관리하는 state
 */
type ModalReducerState = {
    /**
     * Modal Key Stack
     */
    stack: ModalType[]
}
type ModalReducerAction =
    | { type: 'OPEN'; key: ModalType } // Modal Open
    | { type: 'CLOSE'; key: ModalType }

function modalReducer(state: ModalReducerState, action: ModalReducerAction): ModalReducerState {
    switch (action.type) {
        case 'OPEN':
            if (state.stack.includes(action.key)) {
                return state
            } else {
                return { ...state, stack: [...state.stack, action.key] }
            }
        case 'CLOSE':
            return { ...state, stack: state.stack.filter((type) => action.key !== type) }
    }
    return state
}
export function ModalProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(modalReducer, {
        stack: [],
    })
    const result: ModalContext = {
        stack: state.stack,
        open: (key: ModalType) => dispatch({ type: 'OPEN', key: key }),
        close: (modalType: ModalType) => dispatch({ type: 'CLOSE', key: modalType }),
    }
    return <ModalContext value={result}>{children}</ModalContext>
}
