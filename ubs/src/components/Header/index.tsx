import styled from 'styled-components';
import logo from './assets/logo.png';
import perfil from './assets/perfil.png';

const HeaderStyled = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`

const LinkStyled = styled.a`
    color: var(--azeul-escuro);
    font-weight: 700;
`

function Header(){
    return (
        <HeaderStyled>
            <img src={logo} alt="Logo da empresa AgendUBS" />
            <Container>
                <img src={perfil} alt="ícone de perfil do usuário" />
                <LinkStyled href="#">Sair</LinkStyled>
            </Container>
        </HeaderStyled>
    )
}

export default Header;