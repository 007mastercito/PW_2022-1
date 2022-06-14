import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Lugar from "./components/Lugar.component";
import NavBar from "./components/NavBar.component";
import data from "./data"

function App() {
  const Lugares = data.map(item=>{
    return <Lugar lugar = {item}/>
  })
  return (
    <div className="App">
      <NavBar/>
      {Lugares}
    </div>
  );
}

export default App;
