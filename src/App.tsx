import { AuthProvider, ModalProvider, UserProvider } from './app/context'
import { DashboardProvider } from './app/context/DashboardContext'
import { Router } from './app/router'
import { ModalContainer } from './widgets/modal'
import { ToastProvider } from './widgets/toast/model'
import { ToastContainer } from './widgets/toast/ui'

function App() {
    return (
        <ModalProvider>
            <AuthProvider>
                <UserProvider>
                    <DashboardProvider>
                        <ToastProvider>
                            <Router />
                            <ToastContainer position={'top-center'} size={'medium'} animation={'fade-in-up'} />
                            <ModalContainer />
                        </ToastProvider>
                    </DashboardProvider>
                </UserProvider>
            </AuthProvider>
        </ModalProvider>
    )
}

export default App
