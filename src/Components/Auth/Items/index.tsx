import React, { FormEventHandler, useCallback } from 'react'
import { TextInput } from 'Components/Widgets/Inputs'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

export function RegisterWindow(props: { Submit: FormEventHandler; ClickAuth: FormEventHandler }) {
    require('./index.styl')

    return (
        <div>
            <div className='AuthForm'>
                <div className='title'>Регистрация</div>
                <form>
                    <TextInput type='text' emptyText='Логин' id='RegLogin' />
                    <TextInput type='email' emptyText='Почта' id='RegMail' />
                    <TextInput type='password' emptyText='Пароль' id='RegPassword' />
                    <TextInput type='password' emptyText='Повторите пароль' id='RegPasswordSecond' />
                    <div className='buttonsForForm'>
                        <input className='buttonsForForm-button' type='submit' value='Зарегистрироваться'
                               onClick={props.Submit} />
                        <input className='buttonsForForm-button' type='button' value='Авторизация'
                               onClick={props.ClickAuth} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export function AuthorizationWindow(props: { Submit: FormEventHandler; ClickAuth: FormEventHandler }) {
    require('./index.styl')

    return (
        <div>
            <div className='AuthForm'>
                <div className='title'>Авторизация</div>
                <form>
                    <TextInput type='text' emptyText='Логин' id='AuthLogin' />
                    <TextInput type='password' emptyText='Пароль' id='AuthPassword' />
                    <div className='buttonsForForm'>
                        <input className='buttonsForForm-button' type='submit' value='Войти'
                               onClick={props.Submit} />
                        <input className='buttonsForForm-button' type='button' value='Регистрация'
                               onClick={props.ClickAuth} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export function ParticleBackground() {
    const particlesInit = useCallback(async (engine: any) => {
        console.log(engine)

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container)
    }, [])

    return (
        <Particles
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#FF7518',
                    },
                    links: {
                        color: '#FF7F49',
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 2, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}