import React from 'react';
import s from './Main.module.css'
import sContainer from "../common/styles/Container.module.css";

export function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Приветствую!</span>
                    <h1>Я Сергей Стрилец</h1>
                    <p>Я Front-end developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

