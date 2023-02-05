import React from 'react';
import s from './Skills.module.css'
import sContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";

export function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Мои скилы</h2>
                <div className={s.skills}>
                        <Skill
                            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur corporis, incidunt '}
                            title={'HTML'}/>
                        <Skill
                            description={'Accusantium consequatur corporis, incidunt'}
                            title={'CSS'}/>
                        <Skill
                            description={' itaque nam placeat quas quasi quos ratione vel?'}
                            title={'REACT'}/>
                    {/*<Skill*/}
                    {/*    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur corporis, incidunt'}*/}
                    {/*    title={'HTML'}/>*/}
                    {/*<Skill*/}
                    {/*    description={'Accusantium consequatur corporis, incidunt Accusantium consequatur corporis, incidunt'}*/}
                    {/*    title={'CSS'}/>*/}
                    {/*<Skill*/}
                    {/*    description={' itaque nam placeat quas quasi quos ratione vel?Accusantium consequatur corporis, incidunt Accusantium consequatur corporis,'}*/}
                    {/*    title={'REACT'}/>*/}
                </div>
            </div>
        </div>
    );
};

