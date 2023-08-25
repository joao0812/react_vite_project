import React from 'react'
import Styles from './SubmitButton.module.css'

import { Link } from 'react-router-dom'

interface submitButtonProps {
    text: string,
    to: string, 
    type: 'button' | 'submit' | 'reset';
}


export const SubmitButton: React.FC<submitButtonProps> = ({ text, to, type }) => {
    return (
        <div className='border-2 border-white hover:border-transparent'>
            <Link to={to}>
                <button type={type} className={`${Styles.btn3} ${Styles.custombtn}`}><span className='font-bold'>{text}</span></button>
            </Link>
        </div>
    )
}