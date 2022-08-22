import React from 'react'
import { LeftMainPanel } from 'Components/Content/LeftPanel'
import { RightPanel } from 'Components/Content/RightPanel'

export function Content() {
    require('./index.styl')

    return <section className="mainScreen">
        <LeftMainPanel/>
        <RightPanel />
    </section>
}