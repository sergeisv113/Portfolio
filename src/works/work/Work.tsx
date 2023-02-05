import React from 'react';
import s from './Work.module.css'
import sButton from '../../common/styles/Button.module.css'

type WorkType = {
    title: string
    description: string
}
export function Work(props: WorkType) {
    return (
        <div className={s.work}>
            <div className={s.icon}>
                <img src="" alt="My work"/>
                <button className={`${sButton.button} ${s._button}`}>Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
};

