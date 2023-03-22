import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Button.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

export const Button: React.FC<SuperButtonPropsType> = (
    {
        red,
        className,
        ...restProps
    }
) => {
    const finalClassName = `${red ? s.red : ''} ${className} ${s.default}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}


