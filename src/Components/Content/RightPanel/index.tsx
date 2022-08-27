import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavItems from 'Components/Content/NavItems'

export function RightPanel() {
    require('./index.styl')

    return (
        <div className='rightPanel'>
            <Routes>
                {
                    NavItems.map((page) =>
                        <Route path={`${page.link}`} element={<page.component />}
                               key={`section-${page.id}`} />,
                    )
                }
            </Routes>
        </div>
    )
}