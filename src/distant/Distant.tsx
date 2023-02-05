import React from 'react';
import s from './Distant.module.css'
import sContainer from "../common/styles/Container.module.css";
import sButton from "../common/styles/Button.module.css";

export function Distant() {
    return (
        <div className={s.distantBlock}>
            <div className={`${sContainer.container} ${s.distantContainer}`}>
                <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
                <button className={sButton.button}>Нанять меня</button>
            </div>
        </div>
    );
};

