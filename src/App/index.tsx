import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pages } from 'Components/Routes'

import { LoaderWindow } from 'Components/Widgets/Loader'


export function App() {
    const [loading, setLoading] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setLoading('noneVisible')
        }, 1000);
    })
    return (
        <>
            <LoaderWindow loading={loading}/>
            <BrowserRouter>
                <Routes>
                    {
                        Pages.map((page) =>
                            <Route path={page.link} element={<page.component />} key={`section-${page.id}`} />,
                        )
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}