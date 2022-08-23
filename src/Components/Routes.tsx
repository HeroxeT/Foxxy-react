import { ComponentType } from 'react'

import AuthSection from 'Components/Auth'
import Content from 'Components/Content'

interface Route {
    link: string
    id: string
    component: ComponentType<any>
}

export const Pages: Array<Route> = [
    {
        link: '',
        id: 'auth-screen',
        component: AuthSection,
    },
    {
        link: 'main/*',
        id: 'Content',
        component: Content,
    },
]