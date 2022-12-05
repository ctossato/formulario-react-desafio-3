import React from 'react'

import { useNavigate  } from "react-router-dom";

import { Button } from '../../components/Button';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container, Column, Banner, Text, Wrapper, Title, TextUserExists, TextLoginLink, TextLegal } from './styles';

import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'



const Signup = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login")
    }
    
    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });
    
    
    
    const onSubmit = async (formData) => {
        try{
            //TODO: ENVIAR REQUISIÇÃO DE CADASTRO
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

  return (<>
        <Header />
        <Container>
            <Column>
                <Banner>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Banner>
            </Column>

            <Column>
                <Wrapper>
                    <Title>Comece agora grátis</Title>
                    <Text>Crie sua conta e make the change._</Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Nome completo" name="Nome Completo" leftIcon={<MdPerson />} control={control} />
                            {errors.name && <span>Nome é obrigatório</span>}
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                            {errors.senha && <span>Senha é obrigatório</span>}

                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                    </form>
                    <TextLegal>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TextLegal>
                    <TextUserExists>Já tenho conta. </TextUserExists> <TextLoginLink><a onClick={handleLogin}>Fazer login</a></TextLoginLink>
                    
                </Wrapper>
            </Column>
        </Container>
    </>
  )
}

export { Signup }