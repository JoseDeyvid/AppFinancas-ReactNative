import { useContext, useState } from "react"
import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from "../SignIn/styles"
import AuthContext from "../../contexts/AuthContext"
import { ActivityIndicator } from "react-native";


const SignUp = () => {
  const { signup, loading } = useContext(AuthContext);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    if (name && email && password) {
      signup(name, email, password)
      return
    }
  }

  return (
    <Background>
      <Container>
        <AreaInput>
          <Input placeholder="Seu nome" value={name} onChangeText={(text) => setName(text)} />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Senha" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
        </AreaInput>
        <SubmitButton onPress={handleSignUp} disabled={loading}>
          {loading ?
            <ActivityIndicator size={20} color={'#fff'} />
            :
            <SubmitText>Cadastrar</SubmitText>
          }
        </SubmitButton>
      </Container>
    </Background>
  )
}

export default SignUp