import './App.css';
import Button from './components/Button';
import Chart from './components/Chart';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Rating from './components/Rating';
import Subtitle from './components/Subtitle';
import Tabela from './components/Table';
import Title from './components/Title';
import useDadosConsulta from './useDadosConsulta';
import useDadosProfissional from './useDadosProfissional';

function App() {

  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

  if (consultasErro || profissionaisErro) {
    console.log("Ocorreu um erro na requisição")
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Área Admistrativa</Title>
        <Button>Cadastrar especialista</Button>
        <Title imagem='consulta'>Consultas do dia</Title>
        <Tabela consultas={consultas} />
        <Button>Ver mais</Button>
        <Title imagem='grafico'>Consultas mensais por especialista</Title>
        <Subtitle>Dezembro/22</Subtitle>
        <Chart consultas={consultas} profissionais={profissionais}/>
        <Title imagem='avaliacao'>Avaliações de especialistas</Title>
        <Subtitle>Dezembro/22</Subtitle>
        <Rating profissionais={profissionais}/>

      </Container>
      <Footer />
    </>
  );
}

export default App;
