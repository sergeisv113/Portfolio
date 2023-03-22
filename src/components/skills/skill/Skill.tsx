import React from 'react';
import s from './Skill.module.scss'

type SkillType = {
    imageSkill: string
    title: string
    description: string
}

export const Skill = (props: SkillType) => {
    return (
        <div className={s.skill}>
            <div className={`${s.icon} ${s.colorC}`}>{
                <img src={props.imageSkill} alt={props.title}/>
            }</div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
};

