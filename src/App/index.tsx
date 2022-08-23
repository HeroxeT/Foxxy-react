import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pages } from 'Components/Routes'
import { LoaderWindow } from 'Components/Widgets/Loader'

import { AppState } from 'Store/Store'
import { useSelector } from 'react-redux'
import NotFound from 'Components/NotFound'


function App() {
    const { isWindowLoaded } = useSelector((state: AppState) => state.window)
    return (
        <>
            {
                !isWindowLoaded ? (<LoaderWindow />) : null
            }
            <BrowserRouter>
                <Routes>
                    {Pages.map(
                        (page) => (
                            <Route path={`/${page.link}`} element={<page.component />} key={`section-${page.id}`} />
                        ),
                    )}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App