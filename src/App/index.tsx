import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Pages } from 'Components/Routes'

import { LoaderWindow } from 'Components/Widgets/Loader'


export function App() {
    const [loading, setLoading] = useState('')
    useEffect(() => {
        setTimeout(() => {
            setLoading('noneVisible')

        }, 1000)
    }, [loading])

    // const loggingUserToken = true
    const isLogging = true
    return (
        <>
            <LoaderWindow loading={loading} />
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