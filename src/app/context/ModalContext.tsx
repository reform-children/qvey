import { createContext, useReducer, type PropsWithChildren } from 'react'

interface ModalContext {
    /**
     * Modal Key Stack
     */
    stack: string[]
    /**
     * Modal Open
     * @param key Modal Key
     */
    open: (key: string) => void
}

export const ModalContext = createContext<ModalContext | undefined>(undefined)

/**
 * Modal Reducer 가 관리하는 state
 */
type ModalReducerState = {
    /**
     * Modal Key Stack
     */
    stack: any[]
}
type ModalReducerAction = { type: 'OPEN'; key: string } // Modal Open

function modalReducer(state: ModalReducerState, action: ModalReducerAction): ModalReducerState {
    switch (action.type) {
        case 'OPEN':
            return { ...state, stack: [...state.stack, action.key] }
    }
    return state
}
export function ModalProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(modalReducer, {
        stack: [],
    })
    const result: ModalContext = {
        stack: state.stack,
        open: (key: string) => dispatch({ type: 'OPEN', key: key }),
    }
    return <ModalContext value={result}>{children}</ModalContext>
}
