import React from 'react'

import { SubmitButton } from './Buttons/SubmitButton'
import { Input } from './Inputs/Input'
import { Select } from './Inputs/Selects'
import { TextArea } from './Inputs/TextArea'

interface NewProjectProps { }

export const NewProjectForms: React.FC<NewProjectProps> = () => {
    return (
        <form className='w-full flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center lg:w-2/3 w-11/12 max-w-2xl px-6 py-10 bg-gradient-to-b from-indigo-500 to-blue-500 h-full gap-12'>
                <div className='w-full flex gap-4 md:flex-row flex-col'>
                    <div className='flex flex-col w-full gap-8'>
                        <Input name='Project' text='Project Name' type='text' placeholder='Name...' />
                        <Input name='ProjectAcro' text='Project Acro' type='text' placeholder='AA' maxValue={2} />
                    </div>
                    <div className='flex flex-col w-full gap-8'>
                        <Select options={['None', 'software', 'Big Data', 'Robótica', 'Computação', 'Química']} text='Area' value={['None', 'software', 'Big Data', 'Robótica', 'Computação', 'Química']} />
                        <Select options={['None', 'Lucas', 'João', 'Eduardo', 'Erick', 'Julia']} text='Lead' value={['None', 'Lucas', 'João', 'Eduardo', 'Erick', 'Julia']} />
                    </div>
                </div>
                <div className='flex flex-col w-full gap-8'>
                    <Input name='Location' text='Location' type='text' placeholder='Location...' />
                    <div className='flex flex-col md:flex-row justify-between w-full gap-8'>
                        <Input name='Longitute' text='Longitude' type='text' placeholder='Longitude' />
                        <Input name='Latitude' text='Latitude' type='text' placeholder='Latitude' />
                    </div>
                </div>
                <TextArea text='Description' placeholder='Some text here...' maxRow={10} />
                <SubmitButton type='button' text='Criar' to='/projects' />
            </div>
        </form>
    )
}