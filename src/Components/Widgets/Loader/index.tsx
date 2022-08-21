import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

export function LoaderWindow(config:{loading:string}) {
    require('./index.styl')
    return(
        <div className={config.loading}>
            <div className='loader'>
                <ThreeCircles height='300' width='300' color='#FF7F49'/>
                <div className='loader-text'>Foxxy.inc</div>
            </div>
        </div>
    )
}