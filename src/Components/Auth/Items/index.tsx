import React, { FormEventHandler } from 'react'
import { TextInput } from 'Components/Widgets/Inputs'

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