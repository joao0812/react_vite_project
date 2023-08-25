import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { SubmitButton } from './Buttons/SubmitButton'
import { Input } from './Inputs/Input'
import { Select } from './Inputs/Selects'

interface FormsProps { }
interface ApiCategoryResponse {
    id: number,
    name: string
}

export const NewFormsCost: React.FC<FormsProps> = () => {
    const [category, setCategory] = useState<ApiCategoryResponse[]>([])
    useEffect(() => {
        axios.get<ApiCategoryResponse[]>('http://localhost:5001/category', {
            headers: {
                Accept: 'application/json'
            }
        })
            .then((res) => {
                setCategory(res.data)
                console.log(category)
            })
            .catch((error: Error) => {
                console.log(error)
            })
    }, [])

    return (
        <form className='lg:w-2/3 w-11/12 flex flex-col items-center justify-center'>
            <div className='bg-yellow-500 p-6 flex flex-col gap-2 w-full items-center justify-center'>
                <div className='bg-yellow-500 p-6 flex gap-4 w-full'>
                    <Input name='Project' text='Nome do Projecto' type='text' placeholder='Insira o nome do projeto' />
                    <Input name='Budget' text='Orçamento do Projeto' type='number' placeholder='Insira o valor do orçamento' />
                </div>
                <div className='w-full p-6'>
                    <Select options={['Selecione uma opção']} text='Selecione uma Categoria' value={['Selecione uma opção']} />
                </div>
                <div className='w-32 flex items-center justify-center'>
                    <SubmitButton text='Criar' to='/' type='submit' />
                </div>
            </div>
        </form>
    )
}