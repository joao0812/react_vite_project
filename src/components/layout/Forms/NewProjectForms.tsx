import React from 'react'
import { LinkButton } from '../buttons/LinkButton'

interface NewProjectProps { }

export const NewProjectForms: React.FC<NewProjectProps> = () => {
    return (
        <form className='w-1/3 flex flex-col gap-6 p-4 bg-yellow-300 rounded-md'>
            <div className='flex flex-col w-full'>
                <div className='flex flex-col w-full'>
                    <label>Nome do projeto: </label>
                    <input className='rounded-md border-2 border-black p-1' type='text' placeholder='Nome' />
                </div>
                <div className='flex flex-col w-full'>
                    <label>Acro do projeto: </label>
                    <input className='rounded-md border-2 border-black p-1' type='text' placeholder='Acro' />
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <div className='flex flex-col w-full'>
                    <label>Area: </label>
                    <select className='rounded-md border-2 border-black p-1'>
                        <option value='None'>None</option>
                        <option value='software'>Software</option>
                        <option value='Big Data'>Big Data</option>
                        <option value='Robótica'>Robótica</option>
                        <option value='Computação'>Computação</option>
                        <option value='Química'>Química</option>
                    </select>
                </div>
                <div className='flex flex-col w-full'>
                    <label>Lider: </label>
                    <select className='rounded-md border-2 border-black p-1'>
                        <option value='None'>None</option>
                        <option value='Lucas'>Lucas</option>
                        <option value='João'>João</option>
                        <option value='Eduardo'>Eduardo</option>
                        <option value='Erick'>Erick</option>
                        <option value='Julia'>Julia</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <label>Localização do projeto: </label>
                <input className='rounded-md border-2 border-black p-1' type='text' placeholder='Localização' />
                <div className='flex w-full justify-between'>
                    <div className='flex flex-col w-5/12'>
                        <label>Longitude: </label>
                        <input className='rounded-md border-2 border-black p-1' type='text' placeholder='Localização' />
                    </div>
                    <div className='flex flex-col w-5/12'>
                        <label>Latitude: </label>
                        <input className='rounded-md border-2 border-black p-1' type='text' placeholder='Localização' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <label>Descrição: </label>
                <textarea className='w-full rounded-md border-2 border-black p-1' />
            </div>
            <div className='w-full text-center'>
                <LinkButton text='Criar' to='/projects' />
            </div>
        </form>
    )
}