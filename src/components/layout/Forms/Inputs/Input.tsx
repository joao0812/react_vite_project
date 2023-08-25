import React from 'react'

interface InputPros {
    text: string,
    placeholder: string,
    type: string,
    name: string,
    value?: string,
    maxValue?: number,
    handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

export const Input: React.FC<InputPros> = ({ text, placeholder, type, name, value, handleOnChange, maxValue }) => {
    return (
        <div className='flex flex-col p-4 relative border-2 border-white w-full'>
            <label className='text-white font-bold absolute -top-4 left-1 backdrop-blur-sm px-1'>{text}</label>
            <input className='p-3 outline-none'  name={name} value={value} type={type} placeholder={placeholder} onChange={handleOnChange} maxLength={maxValue}/>
        </div>

    )
}