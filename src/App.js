import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import logo from './logo.svg';
import Frase from './components/Frase';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <Pessoa 
        nome="Vinicius"
        profissao="Desenvolvedor"
        idade="21"
        foto={logo}/>
      <Frase/>
    </div>
  );
}

export default App;
