import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Main from './components/Main.component';
import NavBar from './components/NavBar.component';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
