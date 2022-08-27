import React from 'react'
import logoLittle from 'Common/Images/logo.png'
import MainPanelRoutes from 'Components/Content/NavItems'
import { NavLink } from 'react-router-dom'
import { AnimateLeftPanel } from 'Components/Content/LeftPanel/viewController'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'Store/Store'
import { changeContentWindow } from 'Store/Slices/Window'


export function LeftMainPanel() {
    require('./index.styl')
    const { contentWindowIndex } = useSelector((state: AppState) => state.window)
    const dispatch = useDispatch()

    const navLinkOnClick = (index: number, event: any) => {
        if (index === contentWindowIndex) {
            return
        }

        const item = event.currentTarget as HTMLLIElement
        AnimateLeftPanel(item)
        dispatch(changeContentWindow(index))

    }

    const loadLeftPanel = (event: any) => {
        const currentPath = location.pathname.split('/')[2]
        console.log(currentPath)
        const panel = event.currentTarget as HTMLDivElement
        const navItems = panel.querySelectorAll('li')
        MainPanelRoutes.forEach((route, index) => {
            if (route.url === currentPath) {
                dispatch(changeContentWindow(index))
                AnimateLeftPanel(navItems[index + 1])
            }
        })
    }

    return (
        <div className='leftPanel' onLoad={loadLeftPanel}>
            <div className='logo'>
                <img src={logoLittle} alt='лого' width='70' height='70' />
            </div>
            <ul className='navMenu'>
                <li className='navMenu-item background_gray' id='navBack'></li>
                {
                    MainPanelRoutes.map((route, index) => (
                            <li className={`navMenu-item ${route.customStyles || ''}`} key={`leftNav-${route.id}`}
                                onClick={(event) => navLinkOnClick(index, event)}>
                                <NavLink className='superPosLink' to={`/main/${route.url}`}>
                                    <img
                                        src={index === contentWindowIndex ? (route.imageLight) : (route.image)}
                                        alt={route.id}
                                        width='20'
                                        height='20'
                                    />
                                </NavLink>
                            </li>
                        ),
                    )}
            </ul>
        </div>
    )
}