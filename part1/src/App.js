
import './App.css';
import Mensaje from './Mensaje'; 


const Description = () =>{


return <h1>Estas es la app del curso</h1>

}

const VaraCola = () => {
return <h1>Hola hola</h1>
}

function App() {
  return (
    <div className="App">
      <Mensaje message='Estamos trabajando'/>
      <Mensaje message='en un curso'/>
      <Mensaje message='de React'/>
      <Description/>
      <VaraCola></VaraCola>
    </div>
  );
}

export default App;
