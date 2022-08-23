import React from 'react'
import { LeftMainPanel } from 'Components/Content/LeftPanel'
import { RightPanel } from 'Components/Content/RightPanel'
import { changeWindowLoaded } from 'Store/Slices/Window'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'Store/Store'
import { Navigate } from 'react-router-dom'


function Content() {
    require('./index.styl')
    const { isAuth } = useSelector((state: AppState) => state.user)
    const dispatch = useDispatch()

    return (
        isAuth ? (
            <section className='mainScreen' onLoad={() =>
                setTimeout(() =>
                        dispatch(changeWindowLoaded(true)),
                    500)
            }>
                <LeftMainPanel />
                <RightPanel />
            </section>
        ) : (
            <Navigate to='/' />
        )
    )
}

export default Content