import React, { FormEvent } from 'react'
import { up } from 'Common/Scripts'
import logo from 'Common/Images/logo_s_textom_1.png'
import { AuthorizationWindow, RegisterWindow } from 'Components/Auth/Items'


export function AuthSection() {
    require('./index.styl')

    const test = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const item = event.currentTarget as HTMLElement
        const form = up(item, 'form')
        console.log(form)
    }

    const [isAuthScreen, changeScreen] = React.useState(false)
    const toAuthScreen = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        changeScreen(true)
    }
    const toRegisterScreen = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        changeScreen(false)
    }

    const logoHeight = (Math.abs(window.innerHeight - 544)) - 60
    return (
        <section className='loginScreen'>
            <div className='logoLogin'>
                <img src={logo} alt='лого' height={logoHeight} />
            </div>

            <div className='flightAuthScreen'>
                <div className='authorizationScreen'>
                    {
                        isAuthScreen ? (
                            <AuthorizationWindow Submit={test} ClickAuth={toRegisterScreen} />
                        ) : (
                            <RegisterWindow Submit={test} ClickAuth={toAuthScreen} />
                        )
                    }
                </div>
            </div>

            <div className='blackBackground'></div>
            <div id='particles-js'></div>
            <video className='videoBackground' autoPlay={true} muted={true} loop={true}></video>
        </section>
    )
}