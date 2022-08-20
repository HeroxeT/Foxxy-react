import React, { FormEvent } from 'react'
import { up } from 'Common/Scripts'
import { RegisterWindow } from 'Components/Auth/Items'


export function AuthSection() {
    require('./index.styl')

    const test = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const item = event.currentTarget as HTMLElement;
        const form = up(item, 'form');
        console.log(form);
    }

    const toAuthScreen = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <section className='loginScreen'>
            <div className='logoLogin'></div>
            <div className='flightAuthScreen'>
                <div className='authorizationScreen'>
                    <RegisterWindow Submit={test} ClickAuth={toAuthScreen}/>
                </div>
            </div>

            <div className='blackBackground'></div>
            <div id='particles-js'></div>
            <video className='videoBackground' autoPlay={true} muted={true} loop={true} src='assets/video/loginscreen.mp4' ></video>
        </section>
);
}