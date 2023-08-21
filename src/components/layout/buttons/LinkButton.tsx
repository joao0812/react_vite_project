import React from 'react'
import { Link } from 'react-router-dom'

interface linkButtonProps {
    text: string,
    to: string
}

export const LinkButton: React.FC<linkButtonProps> = ({ text, to }) => {
    return (
        <Link to={to}>
            <button className='bg-yellow-500 font-bold px-6 py-4 rounded-full hover:bg-yellow-600 active:bg-yellow-400 duration-100'>{text}</button>
        </Link>
    )
}