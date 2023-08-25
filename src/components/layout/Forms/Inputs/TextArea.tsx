import React from 'react'

interface InputPros {
    text: string,
    placeholder: string,
    maxRow?: number,
    handleOnChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

}

export const TextArea: React.FC<InputPros> = ({ text, placeholder, handleOnChange, maxRow }) => {
    return (
        <div className='flex flex-col p-4 relative border-2 border-white w-full'>
            <label className='text-white font-bold absolute -top-4 left-1 backdrop-blur-sm px-1'>{text}</label>
            <textarea className='p-2 outline-none'  placeholder={placeholder} onChange={handleOnChange} rows={maxRow}/>
        </div>

    )
}