import style from './Aside.module.css'
import { Link } from 'react-router'
import MenuList from '@/features/menu/ui/MenuList'
import LoginStatus from '@/features/menu/ui/LoginStatus'
function Aside() {
    return (
        <aside className={style.container}>
            <div className={style.logo}>
                <Link to={'/'}>Logo</Link>
            </div>
            <nav className={style.nav}>
                <MenuList />
                <LoginStatus />
            </nav>
        </aside>
    )
}
export default Aside
