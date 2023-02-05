import React from 'react';
import s from './Work.module.css'
import sButton from '../../common/styles/Button.module.css'

type WorkType = {
    title: string
    description: string
}
export function Work(props: WorkType) {
    return (
        <div className={s.workContainer}>
            <div className={s.icon}>
                <img src="" alt="My work"/>
                <a href='#' className={`${sButton.button} ${s._button}`}>Смотреть</a>
            </div>
            {/*<div className={s.workDescription}>*/}
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>
                {props.description}
            </span>
            {/*</div>*/}
        </div>
    );
};

