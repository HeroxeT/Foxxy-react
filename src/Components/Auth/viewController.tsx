import { FormEvent } from 'react'
import { up } from 'Common/Scripts'

export function renderAnimation(isAuthWindow: boolean, event: FormEvent<HTMLFormElement>) {
    const button = event.currentTarget as HTMLElement
    const screen = up(button, 'section.loginScreen')[0]
    const logo = screen.querySelector('.logoLogin') as HTMLElement
    const authWindow = screen.querySelector('.flightAuthScreen') as HTMLElement

    const windowHeight = isAuthWindow ? 304 : 444
    const logoMarginTop = isAuthWindow ? 160 : 20


    authWindow.style.height = `${windowHeight}px`

    function logoAnimatic(bool = true) {
        if (bool && isAuthWindow) {
            logo.style.transform = 'rotate(16deg)'
            setTimeout(() => {
                logo.style.transform = 'rotate(-16deg)'
                setTimeout(() => {
                    logo.style.transform = 'rotate(0deg)'
                }, 100)
            }, 100)
            return
        }
        logo.style.marginTop = `${logoMarginTop}px`
    }

    logoAnimatic()
    authWindow.addEventListener('transitionend', () => {
        logoAnimatic(false)
    })

}