import './App.css';
import { PainelDeControle } from './components/PainelDeControle/PainelDeControle';
import { Painel } from './components/painel/Painel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Tarefa Prática de Desenvolvimento de Software</p>
      </header>
      <PainelDeControle />
      <Painel />

    </div>
  );
}

export default App;
