import React, { FormEvent } from 'react'
import logo from 'Common/Images/logo_s_textom_1.png'
import { AuthorizationWindow, ParticleBackground, RegisterWindow } from 'Components/Auth/Items'
import { renderAnimation } from 'Components/Auth/viewController'
import { useNavigate } from 'react-router-dom'


export function AuthSection() {
    require('./index.styl')
    const navigate = useNavigate();

    const test = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        navigate('/main/chats')
    }

    const [isAuthScreen, changeScreen] = React.useState(false)
    const toAuthScreen = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        changeScreen(true)
        renderAnimation(true, event)
    }
    const toRegisterScreen = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        changeScreen(false)
        renderAnimation(false, event)
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
            <div id='particles-js'>
                <ParticleBackground />
            </div>
        </section>
    )
}