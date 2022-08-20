import React from 'react'

export function TextInput(config: { type: string; emptyText: string; id: string; name?: string }) {
    require('./index.styl')

    return (
        <div className='textInputMainClass'>
            {
                config.name ? (
                    <input className='textInputMainClass-input' type={config.type} name={config.name} id={config.id}
                           required />
                ) : (
                    <input className='textInputMainClass-input' type={config.type} id={config.id} required />
                )
            }
            <label className='textInputMainClass-text' htmlFor={config.id}>{config.emptyText}</label>
        </div>
    )
}