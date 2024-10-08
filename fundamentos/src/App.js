import './App.css';
import { PrimeiroComponente } from './components/firsComponents';
import { ListRender } from './components/render/renderList';
import { RenderCondicional } from './components/ifelse/renderCondicional';
import { RenderProps } from './components/props/props';
import { Destruturing } from './components/destruturing/propsDestruturing';
import { Container } from './components/container/container';
import { FunçãoProps } from './components/_funcoes/funcao';
import { Projeto } from './components/PROJETO1/projeto';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <PrimeiroComponente />
      <ListRender />
      <RenderCondicional />
      <RenderProps
        value={'teste'}
      />
      <Destruturing
        name='Oscar'
        age='39'
      />

      <Container>

        <h3>
          Conteudo do container
        </h3>
      </Container>

      {/* pOSSO INCLUSIVE REUTIILIZASR */}
      <Container>

        <h5>
          OUTRO CONTEUDO SENDO ABRAÇADO PELO CONTAINER
        </h5>
      </Container>

      <FunçãoProps
        message={() => { alert('helho word função como paramentro') }}
      />

      <Projeto/>

    </div>
  );
}

export default App;
