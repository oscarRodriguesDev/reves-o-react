import './App.css';
import { PrimeiroComponente } from './components/firsComponents';
import { ListRender } from './components/render/renderList';
import { RenderCondicional } from './components/ifelse/renderCondicional';
import { RenderProps } from './components/props/props';
import { Destruturing } from './components/destruturing/propsDestruturing';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <PrimeiroComponente/>
      <ListRender/>
      <RenderCondicional/>
      <RenderProps
       value ={'teste'}
      />
<Destruturing
name ='Oscar'
age= '39'
/>

    </div>
  );
}

export default App;
