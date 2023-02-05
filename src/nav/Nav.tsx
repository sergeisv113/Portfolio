import React from 'react';
import s from './Nav.module.css'

export function Nav() {
    return (
        <div className={s.nav}>
            <a href="">Главная</a>
            <a href="">Скилы</a>
            <a href="">Проэкты</a>
            <a href="">Контакты</a>
        </div>
    );
};

