import styled from "styled-components"
import IProfissional from "../../types/IProfissional"
import Card from "./Card"
import Button from "../Button"

const SectionCard= styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`

function Rating({profissionais}: {profissionais: IProfissional[] | null}) {
    return(
        <>
            <SectionCard>
                {profissionais?.map((profissional) => {
                    return <Card profissional={profissional} />
                })}
            </SectionCard>
            <Button>Ver mais</Button>
        </>
    )
}

export default Rating