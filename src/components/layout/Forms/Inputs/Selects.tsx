import React from 'react'

interface InputPros {
    options: string[],
    text: string,
    value: string[],
    handleOnChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;

}

export const Select: React.FC<InputPros> = ({ options, text, value, handleOnChange }) => {
    return (
        <div className='flex flex-col p-4 relative border-2 border-white w-full h-full'>
            <label className='text-white font-bold absolute -top-4 left-1 backdrop-blur-sm px-1'>{text}</label>
            <select  onChange={handleOnChange} className='p-3 outline-none' >
                {options.map((item, idx) => (
                    <option key={idx} value={value[idx]}>
                        {item}
                    </option>
                ))}
            </select>
        </div>

    )
}