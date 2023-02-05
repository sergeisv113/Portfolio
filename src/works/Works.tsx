import React from 'react';
import s from './Works.module.css'
import {Work} from "./work/Work";
import sContainer from "../common/styles/Container.module.css";

export function Works() {
    return (
        <div className={s.worksBlock}>
            <div className={`${sContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>Мои работы</h2>
                <div className={s.works}>
                    <Work
                        title={'Сайт портфолио'}
                        description={'Lorem cupiditate dolores earum enim itaque minus nulla quia sed suscipit.Lorem ipsumipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto '}
                    />
                    <Work
                        title={'Сайт визитка'}
                        description={'cupiditate dolores earum enim itaque minus nulla quia sed suscipit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam '}
                    />
                    <Work
                        title={'Сайт портфолио'}
                        description={'Lorem cupiditate dolores earum enim itaque minus nulla quia sed suscipit.Lorem ipsumipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto '}
                    />
                    {/* <Work
                        title={'Сайт портфолио'}
                        description={'Lorem cupiditate dolores earum enim itaque minus nulla quia sed suscipit.Lorem ipsumipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto '}
                    />*/}
                </div>
            </div>
        </div>
    );
};
