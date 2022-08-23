// import React, { useEffect, useState } from 'react'
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Pages } from 'Components/Routes'
import { LoaderWindow } from 'Components/Widgets/Loader'

import { AppState } from 'Store/Store'
import { useSelector } from 'react-redux'



function App() {
    const isWindowLoaded = useSelector((state:AppState) => state.window.isWindowLoaded);
    console.log(isWindowLoaded);


    // const loggingUserToken = true
    const isLogging = true
    return (
        <>
            {
                !isWindowLoaded ? (<LoaderWindow/>) : null
            }
            <BrowserRouter>
                <Routes>
                    {Pages.map(
                        (page) => (
                            page.link === 'main/*'
                                ? (
                                    isLogging ? (
                                        <Route path={`/${page.link}`} element={<page.component />}
                                               key={`section-${page.id}`} />
                                    ) : null

                                ) : (
                                    <Route path={`/${page.link}`} element={<page.component />}
                                           key={`section-${page.id}`} />
                                )
                        ),
                    )}
                </Routes>
                {
                    !isLogging && location.href.split('/')[1] !== '' ? (<Navigate to='/' />) : null
                }
            </BrowserRouter>
        </>
    )
}

export default App