import { type Menu } from '../lib/menu'

const MENU_DATA: Menu[] = [
    { name: '문제집', path: '/book' },
    { name: '자유게시판', path: '/board' },
    { name: '개발자', path: '/dev' },
    { name: 'DEMO Toast', path: '/demo/toast' },
    { name: '공지사항', path: '/notice' },
]

export default { menus: MENU_DATA }
