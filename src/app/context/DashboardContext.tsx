import { createContext, useCallback, useContext, useReducer, type PropsWithChildren } from 'react'

interface DashboardContext {
    title: string
    setTitle: (title: string) => void
}
interface Dashboard {
    title: string
}
type DashboardAction = { type: 'SET_TITLE'; title: string }

const context = createContext<DashboardContext | undefined>(undefined)
function dashboardReducer(state: Dashboard, action: DashboardAction): Dashboard {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, title: action.title }
        default:
            return state
    }
}
export function DashboardProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(dashboardReducer, { title: 'Default Page Title' })
    const setTitle = useCallback((title: string) => dispatch({ type: 'SET_TITLE', title }), [])
    return (
        <context.Provider
            value={{
                title: state.title,
                setTitle,
            }}
        >
            {children}
        </context.Provider>
    )
}

export function useDashboard(): DashboardContext {
    const _context = useContext(context)
    if (!_context) {
        console.error('Dashboard Context Null Error')
        throw new Error('Client Error')
    }
    return _context
}

export default context
