import React from 'react'
// @ts-ignore
import videoDesktop from './backD.mp4';

export function Home() {
    require('./index.styl')

    return <section className="catalog">
        <div className="catalog-bg-video">
            <div className="video-desktop">
                <video src={videoDesktop} loop ></video>
                <div className="catalog-bg-icon"></div>
            </div>
        </div>
    </section>
}