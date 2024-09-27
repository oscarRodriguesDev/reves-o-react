import './App.css';
import { PrimeiroComponente } from './components/firsComponents';
import { ListRender } from './components/render/renderList';
import { RenderCondicional } from './components/ifelse/renderCondicional';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <PrimeiroComponente/>
      <ListRender/>
      <RenderCondicional/>

    </div>
  );
}

export default App;
