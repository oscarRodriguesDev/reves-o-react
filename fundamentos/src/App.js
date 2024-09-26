import './App.css';
import { PrimeiroComponente } from './components/firsComponents';
import { ListRender } from './components/render/renderList';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <PrimeiroComponente/>
      <ListRender/>
    </div>
  );
}

export default App;
