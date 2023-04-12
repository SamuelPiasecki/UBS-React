import styled from 'styled-components';
import avaliacao from './assets/avaliacao.png';
import grafico from './assets/grafico.png';
import consulta from './assets/consulta.png';

interface Props {
    imagem?: string,
    children?: React.ReactNode
}

interface IImagens {
    avaliacao: string,
    grafico: string,
    consulta: string
}

const SpanStyled = styled.span<Props>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    margin-right: 5px;
    background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'}
`

const TitleStyled = styled.h2`
    color: var(--azul-claro);
`

const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
`

function Title ({ imagem, children }: Props) {

    const listaDeImagens: IImagens = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    }

    return(
        <ContainerStyled>
            {imagem && <SpanStyled imagem={listaDeImagens[imagem as keyof IImagens]} /> }
            <TitleStyled>{children}</TitleStyled>
        </ContainerStyled>
    )
}

export default Title;