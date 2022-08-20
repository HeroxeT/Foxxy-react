import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Pages } from 'Components/Routes'

export function App() {

    return (<React.Fragment>
        <Routes>
            {
                Pages.map((page, index) =>
                    <Route path={page.link} element={<page.component />} key={`section-${page.id}`} />,
                )
            }
        </Routes>
    </React.Fragment>)
}