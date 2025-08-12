import { SideMenu } from '@/features/menu'
import style from './Aside.module.css'
import { Link } from 'react-router'
function Aside() {
    return (
        <aside className={style.container}>
            <div className={style.logo}>
                <Link to={'/'}>Logo</Link>
            </div>
            <SideMenu />
        </aside>
    )
}
export default Aside
