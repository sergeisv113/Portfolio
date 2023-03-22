import React from 'react';
import s from './ContactBlock.module.scss'
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type PropsType = {
    icon: IconProp
    title: string
    description: string
}

export const ContactBlock = (props: PropsType) => {

    return (
        <div className={s.contactBlock}>
            <div className={s.icon}>
                <FontAwesomeIcon icon={props.icon}/>
            </div>
            <div className={s.info}>
                <h5 className={s.title}>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
