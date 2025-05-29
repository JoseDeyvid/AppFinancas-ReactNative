import React from 'react'
// import { Text, View } from 'react-native'
import { AreaInput, Background, Logo, Container, Input, SubmitButton, SubmitText, Link, LinkText } from './styles';
import { Platform, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SignIn = () => {
    const navigation = useNavigation();
    return (
        <Background>
            <Container behavior={Platform.OS === 'ios' ? "padding" : ""}>
                <Logo source={require('../../assets/Logo.png')} />
                <AreaInput>
                    <Input placeholder="Seu email" />
                </AreaInput>
                <AreaInput>
                    <Input placeholder="Sua senha" />
                </AreaInput>
                <SubmitButton activeOpacity={.7}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>
                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>
            </Container>
        </Background>
    )
}

export default SignIn;