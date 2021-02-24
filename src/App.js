import './App.css';
import Input from './components/Form/input';
//import { Provider } from 'react-redux';
import { clickButton } from './actions';

import store from './store';
function App() {
  const initialData = {
    Nome: 'Dentista',
    Descricao: 'Limpeza',
    Data: '01/01/21',
    Horario: '12:00',
    Local: 'Consultorio do dentista'
  };

  function handleSubmit(data) {
    if (data.name == '') {
      alert('Nome está vazio');
    }
    console.log(data);
  }
  return (
    <div className="App">
      <h1>Tarefas Cadastradas</h1>
      <form>
        <button type="submit">Todas</button>
        <button type="submit">Pendentes</button>
        <button type="submit">Finalizadas</button>
      </form>
      <h1>Cadastro de Tarefas</h1>
      <form onSubmit={handleSubmit} initialData={initialData}>
        <input name="Nome" type="name" placeholder="Nome da Tarefa"></input>
        <br></br>
        <input
          name="Descricao"
          type="text"
          placeholder="Breve destricao"
        ></input>
        <br></br>
        <input name="Data" type="data" placeholder="dd/mm/yy"></input>
        <br></br>
        <input name="Horario" placeholder="00:00"></input>
        <br></br>
        <input
          name="Local"
          type="text"
          placeholder="Consultorio, casa..."
        ></input>
        <br></br>
        <input
          name="address.Endereco"
          type="text"
          placeholder="Endereço"
        ></input>
        <br></br>
        <button onClick={() => clickButton(this.state.inputValue)}>
          Cadastrar Tarefas
        </button>
      </form>
    </div>
  );
}

export default App;
