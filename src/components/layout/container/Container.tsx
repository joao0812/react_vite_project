import React from 'react'
import style from './Container.module.css'

interface ContainerProps {
    children: React.ReactNode;
    customClass?: string;
}

export function Container({ children, customClass }: ContainerProps) {
    return (
        <div className={`${style.container} ${customClass ? style[customClass] : ''}`}>
            {children}
        </div>
    )
}