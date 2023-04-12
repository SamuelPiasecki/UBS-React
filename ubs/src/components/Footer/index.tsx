import styled from 'styled-components';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';

const FooterStyled = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`

const UlStyled = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`

const LiStyled = styled.li`
    list-style-type: none;
`

function Footer() {
    return (
        <FooterStyled>
            <UlStyled>
                <LiStyled>
                    <a href="https://www.linkedin.com/in/samuel-piasecki/" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="Logo do LinkedIn" />
                    </a>
                    <a href="https://github.com/SamuelPiasecki" target="_blank" rel="noreferrer">
                        <img src={github} alt="Logo do Github" />
                    </a>
                </LiStyled>
            </UlStyled>
            <p>2023 Desenvolvido por Samuel Piasecki | Projeto fictício sem fins lucrativos.</p>
        </FooterStyled>
    )
}

export default Footer;
<p></p>