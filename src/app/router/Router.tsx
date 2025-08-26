import { createBrowserRouter, RouterProvider } from 'react-router'
import { HomePage } from '../../page/home'
import { Dashboard } from '../../widgets/dashboard'
import { Blank } from '../../widgets/blank'
import { RegisterPage } from '../../page/register'
import { NoticeNewPage } from '../../page/noticeNew'
import { NoticeListPage } from '../../page/noticeList'
import { NoticeDetailPage } from '../../page/noticeList'

import { BookPage } from '../../page/book'
import { DevPage } from '@/page/dev/ui'
import { DEMO_ToastPopupPage } from '@/page/DEMO'
import FilterDemoPage from '@/features/demoFilter/ui/filterDemoPage'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Dashboard,
        children: [
            { index: true, Component: HomePage },
            { path: '/notice/new', Component: NoticeNewPage },
            { path: '/dev', Component: DevPage },
            { path: '/demo/toast', Component: DEMO_ToastPopupPage },
            { path: '/book', Component: BookPage },
            { path: '/filter-demo', Component: FilterDemoPage },
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
])
function Router() {
    return <RouterProvider router={router} />
}
export default Router
