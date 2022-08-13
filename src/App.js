// import logo from './logo.svg';
import './App.css';
// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import Frases from './components/Frases';
// import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  // const nome = "Beatriz";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Testando Eventos</h1>
        <Evento numero="1"/>
        <Evento numero="2"/>
        <Form/>
       {/* <Frases />
       <Frases />
       <SayMyName nome="Leonardo" />
       <SayMyName nome="Marcia" />
       <SayMyName nome ={nome} />
       <Pessoa 
       nome="Leonardo" 
       idade="41" 
       profissao="Programador" 
       foto="https://via.placeholder.com/150"
        />
        <List /> */}
      </header>
    </div>
  );
}

export default App;
