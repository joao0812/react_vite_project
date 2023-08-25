import React from 'react'
//import { NewProjectForms } from '../layout/Forms/NewProjectForms'
import { NewFormsCost } from '../layout/Forms/NewFormsCost'

interface newProjectProps {}

export const NewProject: React.FC<newProjectProps> = () => {
    return(
        <div className='container'>
            <h1>NEW PROJECT</h1>
            <p>Crie o seu projeto para depois adicionar os serviços</p>
            <p>Formulário:</p>
            <NewFormsCost />
        </div>
        
    )
}