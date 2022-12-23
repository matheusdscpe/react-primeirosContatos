import { React } from "react";
import  Logo  from "../../assets/logo-dio.png";
import { Button } from "../button";
import { 
    BuscaInputContainer,
    Colum,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
 } from "./style";


const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={Logo} alt="Logo da DIO" />
                    <BuscaInputContainer>
                        <Input placeholder="Buscar..." />
                    </BuscaInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">HOME</MenuRight>
                    <Button title={"Entrar"} />
                    <Button title={"Cadastrar"} />
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }