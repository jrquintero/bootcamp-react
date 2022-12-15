import './App.css';
import Mensaje from './Mensaje';


const Descripcion = () => {
  return <span>Esto es una prueba de JSX</span>
}


const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div className="App">
      <Mensaje color='red' message='Esto es un parametro'/>
      <p>Corriendo el {now.toString()}</p>
      <Descripcion />
      <p>
        {a} mas {b} es {a + b}
      </p>
      <Mensaje color='blue' message='Esto es un parametro'/>
      <Descripcion />
    </div>
  );
}


export default App;
