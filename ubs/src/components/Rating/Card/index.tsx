
import { Rating } from "@mui/material"
import IProfissional from "../../../types/IProfissional"
import styled from "styled-components"

const ContainerStyled = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #fff;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
`

const UlStyled = styled.ul`
    display: flex;
    align-items: center;
    
    width: 100%;
    justify-content: space-between;
    padding: 0;
`

const LiStyled = styled.ul`
    list-style-type: none;
`

const ImgStyled = styled.img`
    border-radius: 100%;
    width: 64px;
    object-fit: cover;
    height: 64px;
    border: 2px solid var(--azul-claro);
    margin-right: 1em
`

const InfoStyled = styled(LiStyled)`
    flex-grow: 1;
`

const NomeStyled = styled.p`
    font-weight: 700;
`
const EspStyled = styled.p`
    margin: .5em 0;
    font-size: 14px;
`

function Card({ profissional }: { profissional: IProfissional }) {
    return(
        <ContainerStyled>
            <UlStyled>
                <LiStyled>
                    <ImgStyled src={profissional.imagem} alt={`Foto de perfil do profissional ${profissional.nome}`} />
                </LiStyled>
                <InfoStyled>
                    <NomeStyled>{profissional.nome}</NomeStyled>
                    <EspStyled>{profissional.especialidade}</EspStyled>
                </InfoStyled>
                <LiStyled>
                    <Rating
                        name="simple-controlled"
                        value={profissional.nota}
                        readOnly={true}
                    />
                </LiStyled>
            </UlStyled>
        </ContainerStyled>
    )
}

export default Card