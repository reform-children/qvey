import { DashboardProvider } from './app/context/DashboardContext'
import { Router } from './app/router'
import { ToastProvider } from './widgets/toast/model'
import { ToastContainer } from './widgets/toast/ui'

function App() {
    return (
        <DashboardProvider>
            <ToastProvider>
                <Router />
                <ToastContainer position={'top-center'} size={'medium'} animation={'fade-in-up'} />
            </ToastProvider>
        </DashboardProvider>
    )
}

export default App
