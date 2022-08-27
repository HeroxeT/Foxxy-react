import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

export function LoaderWindow() {
    require('./index.styl')
    return (
        <div>
            <div className='loader'>
                <ThreeCircles height='300' width='300' color='#FF7F49' />
                <div className='loader-text'>Foxxy.inc</div>
            </div>
        </div>
    )
}

export function LoaderItem(config:{ width:number, height?:number}) {
    require('./index.styl')
    return(
        <div className='loaderFullBlockItem'>
            <ThreeCircles width={config.width} height={config.height || config.width} color='#FF7F49'/>
        </div>
    )
}