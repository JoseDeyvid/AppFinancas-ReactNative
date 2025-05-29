import { useContext } from "react"
import { AreaInput, Background, Container, Input, SubmitButton, SubmitText } from "../SignIn/styles"
import AuthContext from "../../contexts/AuthContext"


const SignUp = () => {
  const { user } = useContext(AuthContext);
  const handleSignUp = () => {
    console.log(user.name)
  }
  return (
    <Background>
      <Container>
        <AreaInput>
          <Input placeholder="Seu nome" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Email" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Senha" />
        </AreaInput>
        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  )
}

export default SignUp