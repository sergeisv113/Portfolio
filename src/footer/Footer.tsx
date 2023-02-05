import React from 'react';
import s from './Footer.module.css'
import sContainer from "../common/styles/Container.module.css";

export function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Сергей Стрилец</h2>

                <div className={s.messenger}>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>

                <h3 className={s.title}>© Все права защищены</h3>
            </div>
        </div>
    );
};

