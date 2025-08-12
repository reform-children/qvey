import { createBrowserRouter, RouterProvider } from 'react-router'
import { HomePage } from '../../page/home'
import { Dashboard } from '../../widgets/dashboard'
import { Blank } from '../../widgets/blank'
import { RegisterPage } from '../../page/register'
import { NoticeNewPage } from '../../page/noticeNew'
import { NoticeListPage } from '../../page/noticeList'
import { NoticeDetailPage } from '../../page/noticeList'

import { BookPage } from '../../page/book'
import { BoardPage } from '@/page/board'
import { DevPage } from '@/page/dev/ui'
import { DEMO_ToastPopupPage } from '@/page/DEMO'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Dashboard,
        children: [
            { index: true, Component: HomePage },
            { path: '/notice/new', Component: NoticeNewPage },
            { path: '/dev', Component: DevPage },
            { path: '/demo/toast', Component: DEMO_ToastPopupPage },
            {
                path: '/notice',
                children: [
                    { index: true, Component: NoticeListPage },
                    { path: 'new', Component: NoticeNewPage },
                    { path: ':id', Component: NoticeDetailPage },
                ],
            },
        ],
    },
    {
        path: '/register',
        Component: Blank,
        children: [{ index: true, Component: RegisterPage }],
    },
    {
        path: '/book',
        Component: Blank, // ← Blank 레이아웃 사용
        children: [{ index: true, Component: BookPage }],
    },
    {
        path: '/board',
        Component: Blank,
        children: [{ index: true, Component: BoardPage }],
    },
])
function Router() {
    return <RouterProvider router={router} />
}
export default Router
