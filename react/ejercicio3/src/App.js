import React from 'react';
import './App.css';


function App() {
  const [click,setClicks] = React.useState(0)

  const Restar = () => {
    setClicks(click-1)
  }

  const Sumar = () => {
    setClicks(click+1)
  }
  return (
    <div className="App">
      <button className='btnResta' onClick={Restar}>-</button>
      <div className='cont'>
        <h2 className='numero'>{click}</h2>
      </div>
      <button className='btnSuma' onClick={Sumar}>+</button>
    </div>
  );
}

export default App;
