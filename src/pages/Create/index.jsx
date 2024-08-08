import { useState } from 'react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import './styles'
import { Titulo } from './styles'

export function Create(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleCreate(){
        if(!name || !email || !password){
            return console.log('Preencha corretamente')
        }

        console.log("Nome: " + name)
        console.log("Email: " + email)
        console.log("Senha: " + password)
    }

    return (
        <>
            <Titulo>Junte-se a nação Maromba! 💪💪</Titulo>

            <Input
                placeholder='Nome'
                type='text'
                onChange={e => setName(e.target.value)}
            />

            <Input
                placeholder='Email'
                type='email'
                onChange={e => setEmail(e.target.value)}
            />

            <Input
                placeholder='Senha'
                type='password'
                onChange={e => setPassword(e.target.value)}
            />

            <Button
                title='Cadastrar!'
                onClick={handleCreate()}
            />
        </>
    )
}