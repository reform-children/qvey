import style from './Dashboard.module.css'
import { Header } from '../../header'
import { Aside } from '../../aside'
import { Outlet } from 'react-router'

function Dashboard() {
    return (
        <div className={style.container}>
            <Aside />
            <main>
                <Header />
                <Outlet />
            </main>
        </div>
    )
}

export default Dashboard
