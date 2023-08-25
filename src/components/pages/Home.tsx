import React from 'react'
import { io } from 'socket.io-client'
import saveMoney from '../../images/saveMoney.png'

import { LinkButton } from '../layout/buttons/LinkButton'

interface homeProps { }


export const Home: React.FC<homeProps> = () => {
    const socket = io('http://localhost:3000')
    return (
        <section className='w-full flex flex-col items-center justify-center p-4 gap-2'>
            <h1>Bem vindo ao <span className='bg-gray-700 text-yellow-500 p-2 rounded-lg'>COST</span></h1>
            <p>Comece a gerenciar seus projetos</p>
            <a href="/">Criar Projeto</a>
            <img src={saveMoney} alt='Costs' className='w-80 mb-8 mt-8' />
            <LinkButton text='Criar projeto' to='/newproject' />
        </section>
    )
}