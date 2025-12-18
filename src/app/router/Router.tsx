import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router'
import { HomePage } from '../../page/home'
import { Dashboard } from '../../widgets/dashboard'
import { Blank } from '../../widgets/blank'
import { RegisterPage } from '../../page/register'
import { NoticeNewPage } from '../../page/noticeNew'
import { NoticeListPage } from '../../page/noticeList'
import { NoticeDetailPage } from '../../page/noticeList'
import { BookPage } from '../../page/book'
import { DevPage } from '@/page/dev/ui'
import { DEMO_CardItemPage, DEMO_ToastPopupPage } from '@/page/DEMO'
import { AuthComponent } from '@/shared/component'
/**
 * 커스텀 Route Object
 */
type AuthRouteObject = Omit<RouteObject, 'children'> & {
    /**
     * 해당 옵션이 true 일 경우에 Login 되어 있어야 접근 가능함
     */
    auth?: boolean

    children?: AuthRouteObject[]
}

const routes: AuthRouteObject[] = [
    {
        path: '/',
        Component: Dashboard,
        children: [
            { index: true, Component: HomePage },
            { path: '/notice/new', Component: NoticeNewPage },
            { path: '/dev', Component: DevPage },
            { path: '/demo/toast', Component: DEMO_ToastPopupPage },
            { path: '/demo/card', Component: DEMO_CardItemPage },
            { path: '/book', Component: BookPage, auth: true },
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
]
/**
 * route auth 가 true 일경우 AuthComponent 를 감싸서 라우터 생성
 */
function wrapAuthRoute(routes: AuthRouteObject[]): RouteObject[] {
    return routes.map(({ auth, children, ...route }): RouteObject => {
        const WrappedComponent = auth
            ? () => <AuthComponent>{route.Component ? <route.Component /> : <></>}</AuthComponent>
            : route.Component

        return children
            ? {
                  ...route,
                  Component: WrappedComponent,
                  index: false,
                  children: wrapAuthRoute(children),
              }
            : {
                  ...route,
                  Component: WrappedComponent,
                  index: true,
                  children: undefined,
              }
    })
}

const router = createBrowserRouter(wrapAuthRoute(routes))

function Router() {
    return <RouterProvider router={router} />
}
export default Router
