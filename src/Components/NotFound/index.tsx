import React from 'react'
import logoLittle from 'Common/Images/logo.png'
import { changeWindowLoaded } from 'Store/Slices/Window'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function NotFound() {
    require('./index.styl')
    const dispatch = useDispatch()
    document.title = 'Foxxy 404 Not Found'

    return (
        <section onLoad={() =>
            setTimeout(() =>
                    dispatch(changeWindowLoaded(true)),
                500)
        }>
            <div className='round'>
                <img src={logoLittle} width='150px' height='150px' alt='foxxy' />
            </div>
            <h1>
                <div>Ой-ой</div>
                <div>Такую страницу я найти не могу ;(</div>
                <div className='bigMarginTop'>Но не все потеряно! Давай вернемся <Link to='/'>назад</Link> и попробуем снова ;)</div>
            </h1>

            <div className='round'>
                <img src={logoLittle} width='150px' height='150px' alt='foxxy' />
            </div>
        </section>
    )
}

export default NotFound