import React from 'react'
import { LeftMainPanel } from 'Components/Content/LeftPanel'
import { RightPanel } from 'Components/Content/RightPanel'
import { changeWindowLoaded } from 'Store/Reducers/Window'
import { useDispatch } from 'react-redux'

function Content() {
    require('./index.styl')
    const dispatch = useDispatch();

    return (
        <section className='mainScreen' onLoad={() =>
            setTimeout(() =>
                    dispatch(changeWindowLoaded(true)),
                500)
        }>
            <LeftMainPanel />
            <RightPanel />
        </section>
    )
}

export default Content