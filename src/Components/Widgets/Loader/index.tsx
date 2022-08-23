import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

export function LoaderWindow() {
    require('./index.styl')
    return(
        <div>
            <div className='loader'>
                <ThreeCircles height='300' width='300' color='#FF7F49'/>
                <div className='loader-text'>Foxxy.inc</div>
            </div>
        </div>
    )
}