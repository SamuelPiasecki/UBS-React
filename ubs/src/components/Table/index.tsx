import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import IConsulta from "../../types/IConsulta";
import styled from "@emotion/styled";

const CellStyled = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

const RowStyled = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }
}))

function Tabela({ consultas } : {consultas : IConsulta[] | null}) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <CellStyled>Data</CellStyled>
                            <CellStyled>Horário</CellStyled>
                            <CellStyled>Profissional</CellStyled>
                            <CellStyled>Especialidade</CellStyled>
                            <CellStyled>Paciente</CellStyled>
                            <CellStyled>Modalidade</CellStyled>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultas?.map((row) => {
                            return(
                                <RowStyled>
                                    <CellStyled component="th" scope="row">{new Date(row.data).toLocaleDateString()}</CellStyled>
                                    <CellStyled>{row.horario}</CellStyled>
                                    <CellStyled>{row.profissional[0].nome}</CellStyled>
                                    <CellStyled>{row.profissional[0].especialidade}</CellStyled>
                                    <CellStyled>{row.paciente}</CellStyled>
                                    <CellStyled>{row.modalidade}</CellStyled>
                                </RowStyled>
                            )
                        })}
                    </TableBody>                       
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela;