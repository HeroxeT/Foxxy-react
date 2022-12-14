import React, { FormEvent } from 'react'
import logo from 'Common/Images/logo_s_textom_1.png'
import { AuthorizationWindow, ParticleBackground, RegisterWindow } from 'Components/Auth/Items'
import { renderAnimation } from 'Components/Auth/viewController'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeWindowLoaded } from 'Store/Slices/Window'
import { authentication } from 'Store/Slices/User'

function AuthSection() {
    require('./index.styl')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isAuthScreen, changeScreen] = React.useState(false)
    document.title = 'Foxxy'


    const test = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()


        dispatch(authentication())
        dispatch(changeWindowLoaded(false))
        navigate('/main/chats')
    }


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
        <section className='loginScreen' onLoad={() =>
            setTimeout(() =>
                    dispatch(changeWindowLoaded(true)),
                500)
        }>
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

export default AuthSection