import React, {useState} from 'react';
import s from './Header.module.scss'
import {Nav} from "./nav/Nav";

export const Header = () => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const isMenuChange = () => setIsActive(!isActive)

    return (
        <div className={s.headerBlock}>
            <div className={s.toggle}
                 tabIndex={1}
                 onClick={isMenuChange}>
                <div className={isActive ? `${s.navIcon} ${s.open}` : s.navIcon}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={isActive ? s.menu : `${s.menu} ${s.close}`}><Nav/></div>
        </div>
    );
}


